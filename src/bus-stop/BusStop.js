import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import $ from 'jquery';
import {markStopAsFavorite} from '../bus-stops/actionCreators'
import {Glyphicon, Button, Col, Panel} from 'react-bootstrap'
import './Bus.css'
import {addFavoriteStop, deleteFavoriteStop} from '../favorites/actionCreators'
import busstopicon from './busstopicon.gif';

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops,
    hourValue: state.sliderData.hourValue
    stops: state.stopsData.stops,
    favoriteStops: state.favorites.favoriteStops
});

const mapDispatchToProps = (dispatch) => ({
    addFavoriteStop: (stopId) => dispatch(addFavoriteStop(stopId)),
    deleteFavoriteStop: (stopId) => dispatch(deleteFavoriteStop(stopId))
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
            addFavoriteStop,
            deleteFavoriteStop,
            favoriteStops
        } = this.props;

        var stopId = parseInt(this.props.params.busStopId);
        var currentStop = stops.filter(stop => stop.id === stopId);
        var currentCoordinates = currentStop.map((stop) => {
            return [stop.cox, stop.coy]
        });


        return (
            <div>
                <Col sm={12} className="Intro-col ">


                    {currentStop.map(function (stop) {
                        console.log('TEST 2',favoriteStops, favoriteStops.indexOf(stopId), stopId)
                        return <p>Przystanek: {stop.name} {""}
                            <Button onClick={() => {
                            favoriteStops.map(a=>a.id).indexOf(stopId) === -1 ?
                            addFavoriteStop(stopId) :
                            deleteFavoriteStop(stopId)
                            }} bsSize="xsmall">
                                <Glyphicon glyph="star"/>
                                {favoriteStops.map(a=>a.id).indexOf(stopId) === -1 ? "Dodaj do ulubionych" : "Usuń z ulubionych"}
                            </Button>
                        </p>
                    })}
                    Linie autobusowe przejeżdające przez dany przystanek:
                    {buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (bus) {
                        return <Label style={{'margin': '2px'}}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link>
                        </Label>
                    })}
                </Col>
                <Col sm={6} className="BusStops-col">
                    {buses.filter(function (bus) {
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
                </Col>
                <Col sm={6} className="Map-col">
                    <div style={{width: '100%', height: '450px'}}>
                        <Map center={currentCoordinates[0]} points={currentStop}/>
                    </div>


                </Col>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
