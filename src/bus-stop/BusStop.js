import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import {markStopAsFavorite} from '../bus-stops/actionCreators'
import {Glyphicon, Button, Col, Panel} from 'react-bootstrap'
import './Bus.css'
import {addFavoriteStop, deleteFavoriteStop} from '../favorites/actionCreators'
import busstopicon from './busstopicon.gif';

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops,
    favoriteStops: state.favorites.favoriteStops
});

const mapDispatchToProps = (dispatch) => ({
    addFavoriteStop: (stopId) => dispatch(addFavoriteStop(stopId)),
    deleteFavoriteStop: (stopId) => dispatch(deleteFavoriteStop(stopId))
});

class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops,
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
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (bus) {
                            let busStopIndex = bus.stops.indexOf(stopId);
                            return (
                                <Col sm={6} className="BusStop-col">

                                    <div>
                                        <Panel header={<div><Link to={`/bus-details/${bus.lineNumber}`}>
                                            <img src={busstopicon} alt="busstopicon"/>
                                            <Label style={{'margin': '2px'}}>{bus.lineNumber}</Label>
                                        </Link>
                                            <p>Przystanek: {currentStop.map(function (stop) {
                                                return <span> {stop.name} </span>
                                            })}</p>
                                        </div>
                                        }>
                                            <p>{bus.routes.map(function (route) {
                                                return <b>{route[busStopIndex] + ' '}</b>
                                            })}</p>
                                        </Panel>
                                    </div>
                                </Col>
                            )
                        }
                    )}

                </Col>
                <Col sm={6} className="Map-col">
                    <div style={{width: '100%', height: '450px'}}>
                        <Map zoom={16} center={currentCoordinates[0]} points={currentStop}/>
                    </div>


                </Col>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
