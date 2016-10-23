import React from 'react';
import {connect} from 'react-redux'
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col, Link} from 'react-bootstrap'
import './BusDetails.css';
import Map from '../map/Map'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

class BusDetails extends React.Component {


    render() {

        var {
            buses,
            stops
        } = this.props;

        var currentBus = buses.find(function (bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));

        var busStops = stops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        });

        var firstStop = busStops.map(function (firstChild) {
            return firstChild
        });


        var stopsList = firstStop.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        }).map(function (stop) {
            return stop.name
        });


        return (

            <div>
                <Row>
                    <Col md={12}>
                        <PageHeader>Linia <Button bsStyle="danger">{this.props.params.busId}</Button>
                            <content>{" : " + stopsList[0] + " – " + stopsList[stopsList.length - 1]}</content>
                        </PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops className="BusDetails-ListChild" stops={busStops}/>

                    </Col>
                    <Col md={6}>
                        <div style={{width: '100%', height: '500px'}}>
                            <Map center={[54.34782, 18.6694]} points={firstStop} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BusDetails)