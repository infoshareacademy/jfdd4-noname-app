import React from 'react';
import {connect} from 'react-redux'
import {Label} from 'react-bootstrap'
import {ListGroup, ListGroupItem, Col, Table} from 'react-bootstrap'
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
            stops,
            buses
        } = this.props;

        var stopId = parseInt(this.props.stopId);

        if (buses === undefined) {
            return <div>Trwa ładowanie danych...</div>
        } else {

        }

        if (typeof stops === undefined ) {
            return <div>Trwa ładowanie danych...</div>
            }


        return (
            <div>
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
                                    timeLeft: stopTime - hourValue,
                                })
                            )
                        }
                        )).sort(function (a,b) {
                            return a.timeLeft - b.timeLeft
                        }).slice(0, 5).map( ({ lineNumber, timeLeft }) => (
                            <Col md={12}>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Label style={{'margin': '2px'}}>
                                            {lineNumber }
                                            {/*{buses.filter(function(abc){*/}
                                                {/*/!*console.debug(lineNumber);*!/*/}
                                                {/*return lineNumber == abc.lineNumber*/}
                                            {/*}).map(function (xyz) {*/}
                                                {/*return xyz.stops*/}
                                            {/*}).map(function (abc) {*/}
                                                {/*return [abc[abc.length-1]]*/}
                                            {/*}).map(function (qwerty) {*/}
                                                {/*return stops.filter(function (a) {*/}
                                                    {/*return qwerty == a.id*/}
                                                {/*}).map(function (dupa) {*/}
                                                    {/*console.log(dupa)*/}
                                                {/*})*/}
                                            {/*})}*/}
                                        </Label>
                                        {" Za: " + timeLeft + " min"}
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        ))}
                </div>

        );
    }
}

export default connect(mapStateToProps)(IncomingBuses)
