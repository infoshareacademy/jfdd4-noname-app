import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import {Label} from 'react-bootstrap'
import Map from '../map/Map'
import $ from 'jquery';
import {markStopAsFavorite} from '../bus-stops/actionCreators'
import {Glyphicon, Button} from 'react-bootstrap'

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
            dupa,
            filteredBus,
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

            // var gowno = buses.filter(function (bus) {
            //     console.log(bus.stops.indexOf(stopId) !== -1);
            //     return bus.stops.indexOf(stopId) !== -1
            // }).map(function (dupa) {
            //     console.log(dupa);
            //     tablica.push(dupa);
            //     console.log(tablica, "tablica");
            //     return dupa
            // }).map(function(filteredBus) {
            //     console.log(filteredBus, "kutas1");
            //         var i;
            //         var j;
            //         for (i = 0; i < filteredBus.routes.length; i++) {
            //             console.log(filteredBus.routes[i], "kutas2");
            //             console.log(filteredBus.lineNumber);
            //             console.log(i, "numer petla");
            //             filteredBus.routes.forEach(function (dupa) {
            //                 console.log(filteredBus.lineNumber + " " + dupa);
            //                 var $dopisanie = $('<li>').append(" " + filteredBus.lineNumber + " " + dupa);
            //                 return $dopisanie.appendTo('ul');
            //             });
            //         }
            // });



        var stonka;
        var tablicaDlugosci = [];
        var tablicaDanych = [];

        // console.log(gowno, "sssssssssssssssssssssssssssssssss");

        // var dupa = function dupa () {
        //     var i;
        //     var j;
        //         for (i = 0; i < gowno.length; i++){
        //             console.log(gowno[i].length, "xxxxxxxxxxxxxxxxxxxxxxxxxxx");
        //             tablicaDlugosci.push(gowno[i].length);
        //             for (j=i; j<=tablicaDlugosci[j]; j++){
        //                 gowno[j].forEach(function (cos) {
        //                     $('p').append(cos)
        //                 });
        //             }
        //         }
        //     };

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

                        for (i = 0; i < filteredBus.routes.length; i++) {
                            console.log(filteredBus.routes[i], "++++");
                            console.log(filteredBus.lineNumber);
                            console.log(i, "numer petla");

                            filteredBus.routes.forEach(function (kurs) {
                                console.log(filteredBus.lineNumber + " " + kurs);
                                {/*var $dopisanie = $('<li>').append(" " + filteredBus.lineNumber + " " + dupa);*/}
                                {/*return $dopisanie.appendTo('ul');*/}
                                console.log(<li>{" " + filteredBus.lineNumber + " " + kurs}</li>);
                                   cos.push(<li>{" " + filteredBus.lineNumber + " " + kurs}</li>)
                            });
                        }
                        return cos;
                    })}
                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
