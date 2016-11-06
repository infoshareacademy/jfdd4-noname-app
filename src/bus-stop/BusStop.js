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
    stops: state.stopsData.stops,
    hourValue: state.sliderData.hourValue
});

const mapDispatchToProps = (dispatch) => ({
    favouriteStop: (stopId) => dispatch(markStopAsFavorite(stopId))
});

const mapHourStringToMinutes = (hourString) =>
    parseInt(hourString.slice(0,2))*60 + parseInt(hourString.slice(3,5));


class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops,
            favouriteStop,
            hourValue,
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


                <ul>
                    {[].concat.apply([], buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function(filteredBus) {
                        return filteredBus.routes.map(
                            route => mapHourStringToMinutes(route[filteredBus.stops.indexOf(stopId)])
                        ).filter(
                            stopTime => hourValue < stopTime
                        ).map(
                            stopTime => ({
                                lineNumber: filteredBus.lineNumber,
                                timeLeft: stopTime - hourValue
                            })
                        )
                    })).sort(function (a,b) {
                        return a.timeLeft - b.timeLeft
                    }).slice(0, 5).map( ({ lineNumber, timeLeft }) => (
                        <li >
                            <Label style={{'margin': '2px'}}>
                                {lineNumber + " "}
                            </Label>
                            {" Pozostało " + (timeLeft) + " min"}

                        </li>
                    ))}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
