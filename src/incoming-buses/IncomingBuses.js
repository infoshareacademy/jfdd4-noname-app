import React from 'react';
import {connect} from 'react-redux'
import {Label} from 'react-bootstrap'
import {Glyphicon, Button, Col, Row, Panel} from 'react-bootstrap'
import './Bus.css'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops,
    hourValue: state.sliderData.hourValue
});

const mapHourStringToMinutes = (hourString) =>
parseInt(hourString.slice(0,2))*60 + parseInt(hourString.slice(3,5));


class IncomingBuses extends React.Component {

    render() {
        var {
            hourValue,
            buses
        } = this.props;


        var stopId = parseInt(this.props.stopId);
        if (buses === undefined) {
            return <div>Trwa ładowanie danych...</div>
        } else {

        }

        return (
            <div>
                {/*{console.debug(buses, "bus")}*/}
                {/*{console.debug(busList, "buslist")}*/}
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

export default connect(mapStateToProps)(IncomingBuses)
