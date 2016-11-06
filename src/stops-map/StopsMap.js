import React from 'react'
import {connect} from 'react-redux'
import Map from '../map/Map'
import IncomingBuses from '../bus-stop/incoming-buses/IncomingBuses'

const mapStateToProps = state => ({
    stops: state.stopsData.stops,
    buses: state.busesData.buses,
    hourValue: state.sliderData.hourValue
});


const StopsMap = ({
    stops,
    buses,
    activeStops = stops.map(s => s.id === 1)
}) => (

    <div>
        <div style={{width: '100%', height: '500px'}}>
            <Map center={[54.352325, 18.671786]} points={activeStops}/>
        </div>
    </div>
);

export default connect(mapStateToProps)(StopsMap)

