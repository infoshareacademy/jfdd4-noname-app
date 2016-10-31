import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import $ from 'jquery';
import {markStopAsFavorite} from '../bus-stops/actionCreators'
import {Glyphicon, Button, Col} from 'react-bootstrap'
import './Bus.css'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

const mapDispatchToProps = (dispatch) => ({
    favouriteStop: (stopId) => dispatch(markStopAsFavorite(stopId))
});

class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops,
            favouriteStop,
            cos = []
        } = this.props;

        var stopId = parseInt(this.props.params.busStopId);
        var currentStop = stops.filter(function (stop) {
            return stop.id === stopId

        });
        var currentCoordinates = currentStop.map((stop) => {
            return [stop.cox, stop.coy]
        });

        var tablica = [];

        return (
            <div>
                {currentStop.map(function (stop) {
                    return <p>Przystanek: {stop.name} {""}
                        <Button onClick={() => favouriteStop(stop.id)} bsSize="xsmall">
                            <Glyphicon glyph="star"/> Dodaj do ulubionych</Button>
                    </p>
                })}
                <div style={{width: '100%', height: '450'}}>
                    <Map center={currentCoordinates[0]} points={currentStop} />
                </div>
                <br />
                Linie autobusowe przejeżdające przez dany przystanek:
                {buses.filter(function (bus) {
                    return bus.stops.indexOf(stopId) !== -1
                }).map(function(bus) {
                    return <Label style={{'margin': '2px'}}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link>
                        </Label>
                })}

                <p>Najbliższe połączenia:</p>
                {buses.filter(function (bus) {
                    return bus.stops.indexOf(stopId) !== -1
                }).map(function(bus) {
                    return (
                        <Label style={{'margin': '2px'}}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link>
                        </Label>
                        )
                })}

                <ul>

                    {buses.filter(function (bus) {
                        console.log(bus.stops.indexOf(stopId) !== -1);
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (mappedRoute) {
                        console.log(mappedRoute);
                        tablica.push(mappedRoute);
                        console.log(tablica, "tablica");
                        return mappedRoute
                    }).map(function(filteredBus) {
                        console.log(filteredBus, "****");
                        var i;

                        for (i = 0; i < filteredBus.routes[i].length; i++) {
                            console.log(filteredBus.routes[i], "++++");
                            console.log(filteredBus.lineNumber);
                            console.log(i, "numer petla");
                            filteredBus.routes[i].forEach(function (kurs) {
                                console.log(filteredBus.lineNumber + " " + kurs);
                                console.log(<li>{" " + filteredBus.lineNumber + " " + kurs}</li>);
                                   cos.push(<li>{" " + filteredBus.lineNumber + " " + kurs}</li>)
                            });
                            return cos;
                        }

                    })}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
