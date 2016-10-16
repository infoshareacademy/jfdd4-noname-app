
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

export default (props) =>
    <div style={{width: '300px', height: '300px'}}>
        {props.x} {props.y}
        <GoogleMap
            bootstrapURLKeys={{
                key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
            }}
            center={[54.357267, 18.682472]}
            zoom={15}>
            <Place lat={props.x} lng={props.y} text={'A'} />
        </GoogleMap>
    </div>