import React from 'react';
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col, Link} from 'react-bootstrap'
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'
import data from '../data/data.js'
import './BusDetails.css';


export default class BusDetails extends React.Component {


    render () {

        var currentBus = data.buses.find(function(bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));

        var busStops = data.stops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        });

        var firstStop =  busStops.map(function (firstChild) {
            return firstChild
        });

        console.log(currentBus);
        console.log(busStops, "---------------------");
        console.log(firstStop.filter(function (dupa) {
            return currentBus.stops.indexOf(dupa.id) !== -1
        }).map(function (xyz) {
            console.log(xyz.name, "hhhhhhhhhhhhhhhhhhhhhhhhhh")
            return xyz.name
        }), "xxxxxxxxxxxxxxxxxxxxxxx");

        console.log(firstStop, "*****************************")

        var listaPrzystankow = firstStop.filter(function (dupa) {
            return currentBus.stops.indexOf(dupa.id) !== -1
        }).map(function (xyz) {
            return xyz.name});

        console.log(listaPrzystankow, "duuuuuuuuuuuupaaaa");

        return(

            <div>
                <Row>
                    <Col md={12}>
                            <PageHeader>Linia <Button bsStyle="danger">{this.props.params.busId}</Button>
                                <content>{" -> "+ listaPrzystankow[0]+" -> "+listaPrzystankow[listaPrzystankow.length-1]}</content>
                            </PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops className="BusDetails-ListChild" stops={busStops}/>

                    </Col>
                    <Col md={6}>
                        <div style={{width: '100%', height: '500px'}}>
                        <GoogleMap
                            bootstrapURLKeys={{
                                key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                            }}
                            center={[54.357267, 18.682472]}
                            zoom={12}>
                            {busStops.map(function (stop) {
                                return <Place key={stop.id} lat={stop.cox} lng={stop.coy} text={'B'}/>
                            })}
                        </GoogleMap>
                        </div>
                    </Col>
                </Row>



            </div>
        )

    }
}