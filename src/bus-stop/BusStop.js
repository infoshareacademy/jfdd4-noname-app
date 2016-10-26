import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import {markStopAsFavorite} from '../bus-stops/actionCreators'
import {Glyphicon, Button, Col} from 'react-bootstrap'

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
            favouriteStop
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
                            <Button onClick={() => favouriteStop(stop.id)} bsSize="xsmall">
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
                <Col sm={6} className="Intro-col ">
                    <p>Rozkłady jazdy:
                        {currentStop.map(function (stop) {
                            return <span> {stop.name} </span>
                        })}

                    </p>
                    {buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (bus) {
                            return <div>
                                <Link to={`/bus-details/${bus.lineNumber}`}>
                                    Linia autobusowa numer: {bus.lineNumber}
                                    {buses.filter(function (bus) {
                                        return stopId === bus.stops
                                    }).map(function (bus) {
                                        return <p>{bus.routes}</p>

                                    })}
                                </Link>
                            </div>
                        }
                    )}
                    <div>

                    </div>

                </Col>
                <Col sm={6} className="Intro-col ">
                    <div style={{width: '100%', height: '450'}}>
                        <Map center={currentCoordinates[0]} points={currentStop}/>
                    </div>


                </Col>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
