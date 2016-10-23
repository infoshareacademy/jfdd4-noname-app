import React from 'react';
import {connect} from 'react-redux'
import Bus from './Bus';
import Map from '../map/Map'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops
        } = this.props;

        var stopId = parseInt(this.props.params.busStopId);
        var currentStop = stops.filter(function (stop) {
            return stop.id === stopId
        });
        var currentCoordinates = currentStop.map((stop) => {
            return [stop.cox, stop.coy]
        });


        return (
            <div>
                {currentStop.map(function (stop) {
                    return <p>Przystanek: {stop.name}</p>
                })}
                <div style={{width: '100%', height: '450'}}>
                    <Map center={currentCoordinates[0]} points={currentStop} />
                </div>
                <br />
                Linie autobusowe przejeżdające przez dany przystanek:
                //TODO: dodać przyciski autobusów
                {buses.filter(function (bus) {
                    return bus.stops.indexOf(stopId) !== -1
                }).map(function(bus) {
                    return <Bus>{bus.lineNumber}</Bus>
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(BusStop)