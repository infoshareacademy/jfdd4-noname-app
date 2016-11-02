import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import {Glyphicon, Button, Col} from 'react-bootstrap'
import './Bus.css'
import {addFavoriteStop} from '../favorites/actionCreators'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

const mapDispatchToProps = (dispatch) => ({
    addFavoriteStop: (stopId) => dispatch(addFavoriteStop(stopId))
});

class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops,
            addFavoriteStop
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
                <Col sm={12} className="Intro-col ">


                    {currentStop.map(function (stop) {
                        return <p>Przystanek: {stop.name} {""}
                            <Button onClick={() => addFavoriteStop(stop.id)} bsSize="xsmall">
                                <Glyphicon glyph="star"/> Dodaj do ulubionych</Button>
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
                    <p>Rozkłady jazdy:
                        {currentStop.map(function (stop) {
                            return <span> {stop.name} </span>
                        })}

                    </p>

                    {buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (bus) {
                        let busStopIndex = bus.stops.indexOf(stopId);
                            return (
                                <Col sm={6} className="BusStop-col">
                                    <Link to={`/bus-details/${bus.lineNumber}`}>
                                        Linia autobusowa numer: {bus.lineNumber}
                                    </Link>
                                    <p>{bus.routes.map(function (route){
                                        return <b>{route[busStopIndex] + ' '}</b>
                                    })}</p>
                                </Col>
                            )
                        }
                    )}

                </Col>
                <Col sm={6} className="Map-col">
                    <div style={{width: '100%', height: '450'}}>
                        <Map center={currentCoordinates[0]} points={currentStop}/>
                    </div>


                </Col>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
