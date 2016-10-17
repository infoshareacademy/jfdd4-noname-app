
import React from 'react'
import GoogleMap from 'google-map-react'
import Stop from './stop-place/Stop'



export default  class StopsMap extends React.Component {
    render() {
        return <div style={{width: '1100px', height: '500px'}}>
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                }}
                center={[54.357267, 18.682472]}
                zoom={10}>
                <Stop lat={54.357267} lng={18.682472} text={'A'}/>
            </GoogleMap>
        </div>
    }
}