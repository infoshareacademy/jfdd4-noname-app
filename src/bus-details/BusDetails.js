import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import LineStops from '../line-stops/LineStops';
import {Button, Glyphicon, PageHeader, Row, Col} from 'react-bootstrap'
import './BusDetails.css';
import Map from '../map/Map'
import {markBusAsFavorite} from '../bus-lines/actionCreators'

const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

const mapDispatchToProps = (dispatch) => ({
    favoriteBus: (busId) => dispatch(markBusAsFavorite(busId))
})

class BusDetails extends React.Component {


    render() {

        var {
            buses,
            stops,
            favoriteBus
        } = this.props;

        var currentBus = buses.find(function (bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));

        if (currentBus === undefined) {
            return <div>Trwa ładowanie danych...</div>
        }

        var busStops = stops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        });

        var stopsList = busStops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        }).map(function (stop) {
            return stop.name});

        var lastFirstStop = busStops.filter(function (stop) {
            return stopsList.indexOf(stop.name) !== -1
        }).map(function (stop) {
            return stop.id});

        return (

            <div>
                <Row>
                    <Col md={12}>
                        <PageHeader>Linia <Link to={`/bus-lines`}><Button bsStyle="danger">{this.props.params.busId}</Button></Link>
                            <content>{" : " }
                            <Link to={`/bus-stops/${lastFirstStop[0]}`}>{stopsList[0]}</Link>
                                {" – "}
                            <Link to={`/bus-stops/${lastFirstStop[lastFirstStop.length - 1]}`}>{stopsList[stopsList.length - 1]}</Link>

                            <Button onClick={() => favoriteBus(currentBus.lineNumber)} bsSize="xsmall">
                                <Glyphicon glyph="star"/>
                                Dodaj do ulubionych
                            </Button>

                            </content>
                        </PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops className="BusDetails-ListChild" stops={busStops} currentBus={currentBus.lineNumber}/>

                    </Col>
                    <Col md={6}>
                        <div style={{width: '100%', height: '500px'}}>
                            <Map center={[54.350610, 18.663068]} points={busStops} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusDetails)