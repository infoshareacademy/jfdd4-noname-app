import React from 'react'
import {connect} from 'react-redux'
import GoogleMap from 'google-map-react'
import Map from '../map/Map'
import Stop from './stop-place/Stop'

const mapStateToProps = state => ({
    stops: state.stopsData.stops
})

const StopsMap = ({
    stops
}) => (
    <div>
        <div style={{width: '100%', height: '500px'}}>
            <Map center={[54.357267, 18.682472]} points={stops} />
        </div>
    </div>
);

export default connect(mapStateToProps)(StopsMap)


// <GoogleMap
// bootstrapURLKeys={{
//     key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
// }}
// center={[54.357267, 18.682472]}
// zoom={12}>
//     {stops.map(function (stops) {
//         return <Stop lat={stops.cox} lng={stops.coy} text={'x'}/>
//     })}
// </GoogleMap>