import React from 'react'
import {connect} from 'react-redux'
import Map from '../map/Map'

const mapStateToProps = state => ({
    stops: state.stopsData.stops,
    hourValue: state.sliderData.hourValue
});

const StopsMap = (
    {
    stops,
    hourValue
}) => (
    <div>
        <div style={{width: '100%', height: '500px'}}>
            <Map center={[54.352325, 18.671786]} points={stops} />
        </div>
        <p>
            {/*{hourValue}*/}
        {((hourValue/60).toFixed(0))}{":"}{( (hourValue) % 60 )}
        </p>
    </div>
);

export default connect(mapStateToProps)(StopsMap)

