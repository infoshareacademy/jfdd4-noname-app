import React from 'react'
import {connect} from 'react-redux'
import Map from '../map/Map'
import IncomingBuses from '../incoming-buses/IncomingBuses'

const mapStateToProps = state => ({
    stops: state.stopsData.stops,
    buses: state.busesData.buses,
    hourValue: state.sliderData.hourValue
});

class StopsMap extends React.Component {

    render() {
        var {
            stops
        } = this.props;

        if (stops.length === 0) {
            return <div>Trwa ładowanie danych...</div>
        }

        console.log('TEST', stops);


        return (
            <div>
                <div style={{width: '100%', height: '500px'}}>
                    <Map zoom={12} center={[{cox: 54.368420,coy: 18.644188}]} points={stops}/>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(StopsMap)

