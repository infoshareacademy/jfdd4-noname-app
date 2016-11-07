import React from 'react'
import GoogleMap from 'google-map-react'
import Stop from '../stops-map/stop-place/Stop'
import IncomingBuses from '../incoming-buses/IncomingBuses'


export default  class Map extends React.Component {
    render() {


        var MARKER_SIZE = 15;
        const markerStyle = {
            position: 'absolute',
            width: MARKER_SIZE,
            height: MARKER_SIZE,
            left: -MARKER_SIZE / 2,
            top: -MARKER_SIZE
        };

        var centerMap = (stops)=>{
            let xArray = stops.map(x=>x.cox);
            let yArray = stops.map(y=>y.coy);
            function average(array) {
                return array.reduce((prev, curr)=>(prev + curr))/array.length
            }
            return [average(xArray), average(yArray)]
        };

        // const getStyle=(props)=>({...markerStyle, transform: `scale(2)`});


        return <div style={{width: '100%', height: '100%'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={centerMap(this.props.center)}
                zoom={this.props.zoom}>
                {this.props.points.map(function (point) {
                    return <Stop key={point.id} to={`/bus-stops/${point.id}`} lat={point.cox} lng={point.coy}>
                        {point.name}
                        <IncomingBuses stopId={point.id}/>
                    </Stop>
                })}
            </GoogleMap>
        </div>
    }
}