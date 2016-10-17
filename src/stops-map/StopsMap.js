
import React from 'react'
import GoogleMap from 'google-map-react'

export default  class StopsMap extends React.Component {
    render() {
        return <div style={{width: '1100px', height: '500px'}}>
            {this.props.x} {this.props.y}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={[54.357267, 18.682472]}
                zoom={10}>
            </GoogleMap>
        </div>
    }
}