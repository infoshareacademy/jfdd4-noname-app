import React from 'react'
import GoogleMap from 'google-map-react'
import Stop from '../stops-map/stop-place/Stop'


export default  class Map extends React.Component {
    render() {


        var MARKER_SIZE = 40;
        const markerStyle = {
            position: 'absolute',
            width: MARKER_SIZE,
            height: MARKER_SIZE,
            left: -MARKER_SIZE / 2,
            top: -MARKER_SIZE
        }
        const getStyle=(props)=>({...markerStyle, transform: `scale(2)`});


        return <div style={{width: '100%', height: '100%'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={this.props.center}
                zoom={13}>
                {this.props.points.map(function (point) {
                    console.log(point);
                    return <Stop lat={point.cox} lng={point.coy}>
                        {point.name}
                    </Stop>
                })}
            </GoogleMap>
        </div>
    }
}