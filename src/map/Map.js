import React from 'react'
import GoogleMap from 'google-map-react'
import Stop from '../stops-map/stop-place/Stop'

export default  class Map extends React.Component {
    render() {
        return <div style={{width: '100%', height: '100%'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={this.props.center}
                zoom={14}>
                {this.props.points.map(function (point) {
                    console.log(point);
                    return <Stop lat={point.cox} lng={point.coy}/>
                })}
            </GoogleMap>
        </div>
    }
}