import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col} from 'react-bootstrap'
import './BusDetails.css';
import Map from '../map/Map'
import SliderComponent from '../map/slider/SliderComponent'


const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops,
    hourValue: state.sliderData.hourValue
});

class BusDetails extends React.Component {


    render() {

        var {
            buses,
            hourValue,
            stops
        } = this.props;

        var currentBus = buses.find(function (bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));

        if (currentBus === undefined) {
            return <div>Trwa ładowanie danych...</div>
        }

        var busStops = currentBus.stops.map(lineStop =>
            stops.find(s => s.id === lineStop ));

        // var busStops = stops.filter(function (stop) {
        //     return currentBus.stops.indexOf(stop.id) !== -1
        // });

        var stopsList = busStops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        }).map(function (stop) {
            return stop.name});

        var lastFirstStop = busStops.filter(function (stop) {
            return stopsList.indexOf(stop.name) !== -1
        }).map(function (stop) {
            return stop.id});

        var obecnyNumer = this.props.params.busId;
        var ileMinutWGodzinie =  new Date(hourValue).getMinutes();
        var ileGodzinWDobie = new Date(hourValue).getHours();
        var liczbaGodzina = ileGodzinWDobie.toString() + ":" + ileMinutWGodzinie.toString();
        var przystanekGodzina;

        console.log(liczbaGodzina, "ffffffffffffffffffffffffffffff");

        return (
            <div>
                <Row>
                    <Col md={12}>
                        <PageHeader>Linia <Link to={`/bus-lines`}><Button bsStyle="danger">{this.props.params.busId}</Button></Link>
                            <content>{" : " }
                            <Link to={`/bus-stops/${lastFirstStop[0]}`}>{stopsList[0]}</Link>
                                {" – "}
                            <Link to={`/bus-stops/${lastFirstStop[lastFirstStop.length - 1]}`}>{stopsList[stopsList.length - 1]}</Link>
                            </content>
                        </PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="BusDetails-Lists">
                        <LineStops className="BusDetails-ListChild" stops={busStops} currentBus={currentBus.lineNumber}/>
                    </Col>
                    <Col md={6}>
                        <div style={{width: '100%', height: '500px'}}>
                            <Map center={[54.350610, 18.663068]} points={busStops} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>Mamy godzinę: {new Date(hourValue).getHours() + ':' + new Date(hourValue).getMinutes()} </p>
                    {console.log(buses, "*************")}
                    {console.log(obecnyNumer)}

                    {buses.filter(function (xyz){
                        console.log(xyz, "ooooooooooooo");
                        return obecnyNumer.indexOf(xyz.lineNumber) !== -1;
                    }).filter(function (abc) {
                        console.log(abc, "xxxxxxx");
                        var polaczoneTabele = abc.routes[0].concat(abc.routes[1]);
                        console.log(polaczoneTabele.indexOf(liczbaGodzina) !== -1, "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
                        console.log(polaczoneTabele.findIndex(function (warunek) {
                        return warunek === liczbaGodzina;
                        }), "///////////////////////////////////////");
                        return polaczoneTabele.indexOf(liczbaGodzina) !== -1
                    }).map(function (qwerty) {
                        console.log(qwerty, "gggggggggggggggggggggggggggggggggggggggggggg");
                        return qwerty = przystanekGodzina;
                    })
                    }

                    {console.log(busStops, "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")}
                    </Row>
                <Row>
                    <SliderComponent />
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BusDetails)