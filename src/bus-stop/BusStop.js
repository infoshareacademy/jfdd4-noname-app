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
            provideMappedBus,
            hourValue
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
                        {/*console.log(bus.stops.indexOf(stopId) !== -1);*/}
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function(mappedBus) {
                        return mappedBus.routes.filter(function (route) {
                            provideMappedBus = mappedBus;
                            let currentRouteHourString = route[mappedBus.stops.indexOf(stopId)];
                            let currentRouteHour = parseInt(currentRouteHourString.slice(0,2))*60 + parseInt(currentRouteHourString.slice(3,5));
                            console.debug(currentRouteHour, "currentRouteHour" );
                            console.debug(hourValue > currentRouteHour);
                            return hourValue < currentRouteHour  ;

                            {/*let zmapowaneGodzinyRozklad=route[mappedBus.stops.indexOf(stopId)].slice(0,2);*/}
                            {/*let zmapowaneMinutyRozklad=route[mappedBus.stops.indexOf(stopId)].slice(4,5);*/}

                            {/*let godzinaMapowanegoKursu = new Date ();*/}
                            {/*godzinaMapowanegoKursu.setHours(zmapowaneGodzinyRozklad);*/}
                            {/*godzinaMapowanegoKursu.setMinutes(zmapowaneMinutyRozklad);*/}

                            {/*var pozostaloDoNastepnegoKursu = (godzinaMapowanegoKursu.getTime() - obecnaGodzina.getTime()) / 86400;*/}
                            {/*console.log(pozostaloDoNastepnegoKursu);*/}
                            {/*if (godzinaMapowanegoKursu >= obecnaGodzina){*/}
                               {/*return true*/}
                            {/*}else{*/}
                               {/*return false*/}
                            {/*}*/}

                        }).map( mappedBus => (
                            <li>
                                <Label style={{'margin': '2px'}}>
                                    {provideMappedBus.lineNumber + " "}
                                </Label>

                                {mappedBus[provideMappedBus.stops.indexOf(stopId)]}
                                {/*{" pozostało " + pozostaloDoNastepnegoKursu.toFixed(0) +" min" }*/}
                            </li>
                        ));
                    })}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
