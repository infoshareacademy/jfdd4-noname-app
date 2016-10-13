
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

export default (props) =>
    <div style={{width: '1100px', height: '450px'}}>
        <GoogleMap
            center={[54.3610873, 18.6900271]}
            zoom={10}>
            <Place lat={54.3610873} lng={18.6900271} text={'A'} />
        </GoogleMap>
    </div>