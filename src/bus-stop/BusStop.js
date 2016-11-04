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
            provideMappedBus,
            currentRouteHourString,
            currentRouteHour,
            hourValue,
            minutesLeft = []
        } = this.props;

        var stopId = parseInt(this.props.params.busStopId);
        var currentStop = stops.filter(function (stop) {
            return stop.id === stopId

        });
        var currentCoordinates = currentStop.map((stop) => {
            return [stop.cox, stop.coy]
        });

        var ileMinutWGodzinie =  new Date(hourValue).getMinutes();
        var ileGodzinWDobie = new Date(hourValue).getHours();
        var obecnaGodzina = new Date();
        obecnaGodzina.setHours(ileGodzinWDobie);
        obecnaGodzina.setMinutes(ileMinutWGodzinie);

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
                    {buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function(mappedBus) {
                        return mappedBus.routes.filter(
                            route =>
                                hourValue < mapHourStringToMinutes(route[mappedBus.stops.indexOf(stopId)])
                        ).map( route => (
                            <li>
                                <Label style={{'margin': '2px'}}>
                                    {mappedBus.lineNumber + " "}
                                </Label>
                                {" Pozostało " + (mapHourStringToMinutes(route[mappedBus.stops.indexOf(stopId)]) - hourValue)}
                            </li>
                        ));
                    })}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
