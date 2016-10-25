import React from 'react'
import {connect} from 'react-redux'
import Map from '../map/Map'

const mapStateToProps = state => ({
    stops: state.stopsData.stops
});

const StopsMap = ({
    stops
}) => (
    <div>
        <div style={{width: '100%', height: '500px'}}>
            <Map center={[54.352325, 18.671786]} points={stops} />
        </div>
    </div>
);

export default connect(mapStateToProps)(StopsMap)

