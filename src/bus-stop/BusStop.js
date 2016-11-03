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

class BusStop extends React.Component {

    render() {
        var {
            buses,
            stops,
            favouriteStop,
            hourValue,
            routesItemsArray = []
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
        var liczbaGodzina = ileGodzinWDobie.toString() + ":" + ileMinutWGodzinie.toString();

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
                        console.log(bus.stops.indexOf(stopId) !== -1);
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function(mappedBus) {
                        console.log(mappedBus, "****");
                        return mappedBus.routes.map(function (route) {
                                                                                            {/*console.log(route, "co?");*/}
                                                                                            {/*console.log(route[mappedBus.stops.indexOf(stopId)].typeof, "xxx");*/}
                                                                                            {/*console.log(obecnaGodzina, "obecnie ustawiona godzina");*/}
                            let zmapowaneGodzinyRozklad=route[mappedBus.stops.indexOf(stopId)].slice(0,2);
                            let zmapowaneMinutyRozklad=route[mappedBus.stops.indexOf(stopId)].slice(4,5);
                                                                                            {/*console.log(zmapowaneGodzinyRozklad, "zmapowaneGodzinyRozklad");*/}
                                                                                            {/*console.log(zmapowaneMinutyRozklad, "zmapowaneMinutyRozklad");*/}
                            let godzinaMapowanegoKursu = new Date ();
                            godzinaMapowanegoKursu.setHours(zmapowaneGodzinyRozklad);
                            godzinaMapowanegoKursu.setMinutes(zmapowaneMinutyRozklad);
                                                                                            console.log(liczbaGodzina);
                                                                                            {/*console.log(godzinaMapowanegoKursu, "godzinaMapowanegoKursu");*/}
                            var pozostaloDoNastepnegoKursu = (Math.abs(Math.abs(godzinaMapowanegoKursu.getTime() - obecnaGodzina.getTime()) / 86400));
                            if (godzinaMapowanegoKursu >= obecnaGodzina){
                                                                                            console.log("true");
                                return (
                                    <li>
                                        <Label style={{'margin': '2px'}}>
                                            {mappedBus.lineNumber}
                                        </Label>
                                        {route[mappedBus.stops.indexOf(stopId)]}
                                        {" pozostało " + pozostaloDoNastepnegoKursu.toFixed(0) +" min" }
                                    </li>
                                )
                            }else{
                                return console.log('false')
                            }

                        }
                        );
                    })}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
