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
            cos
        } = this.props;

        var stopId = parseInt(this.props.params.busStopId);
        var currentStop = stops.filter(function (stop) {
            return stop.id === stopId
        });
        var currentCoordinates = currentStop.map((stop) => {
            return [stop.cox, stop.coy]
        });

        var gowno = buses.filter(function (bus) {
            return bus.stops.indexOf(stopId) !== -1
        }).map(function(bus) {
            console.log(bus, "kutas1");
            return bus}).filter(
            function (jajo) {
                var i;
                var j;
                for (i = 0; i < jajo.routes[i].length; i++){
                    console.log(jajo.routes[i], "kutas2");
                    console.log(jajo.lineNumber);
                    for (j = i; j < jajo.routes[i].length; j++){
                        jajo.routes[j].forEach(function (dupa) {
                            console.log(jajo.lineNumber + " " + dupa );
                            var $dopisanie = $('<li>').append(" "+  jajo.lineNumber + " " + dupa);
                            $dopisanie.appendTo('ul')
                        })
                    }
                }
            }
        );

        var stonka;
        var tablicaDlugosci = [];
        var tablicaDanych = [];

        console.log(gowno, "sssssssssssssssssssssssssssssssss");

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

        // var stolec = function () {
        //     for (var i = 0; i > gowno.length; i++){
        //
        //     }
        // };

            console.log(tablicaDlugosci, "tablcia dlugosci");

        console.log(stonka, "-----------------------------------------------------------xxx ");


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

                <ul className="stolczyk">

                    {buses.filter(function (bus) {
                        return bus.stops.indexOf(stopId) !== -1
                    }).map(function (bus) {
                        return (
                            <p className="stolec">
                            <Label style={{'margin': '2px'}}>
                                <Link to={`/bus-details/${bus.lineNumber}`}>
                                   {bus.lineNumber + " "}

                                </Link>
                            </Label>
                                </p>
                        )
                    })
                    }


                    {/*{buses.map(function (xyz) {*/}
                        {/*console.log(xyz, "/////////////////////////////");*/}
                        {/*cos =xyz;*/}
                        {/*console.log(cos, "**************************************************");*/}
                         {/*return cos}).map(function (dupa) {*/}
                            {/*return (*/}
                                {/*<li className="dupa">{dupa.lineNumber + " "}{dupa.routes.map(function (kamien){*/}
                                    {/*return <content>{kamien}</content>*/}
                                {/*})}</li>*/}
                            {/*)*/}
                    {/*})}*/}

                    {console.log(cos, "--------------------------------------")}

                    {/*{cos.lineNumber.forEach(function (dupa) {*/}
                             {/*var i;*/}
                                {/*for(i =1 ; i <dupa.routes.length; i++ ) {*/}
                                        {/*<li>1</li>*/}
                                {/*}*/}
                            {/*})*/}
                        {/*}*/}

                    </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusStop)
