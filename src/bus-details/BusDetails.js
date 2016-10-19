import React from 'react';
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'
import data from '../data/data.js'


export default class BusDetails extends React.Component {


    render () {

        var currentBus = data.buses.find(function(bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));

        var busStops = data.stops.filter(function (stop) {
            return currentBus.stops.indexOf(stop.id) !== -1
        });

        return(

            <div>
                <Row>
                    <Col md={6}>
                            <PageHeader>Linia <Button bsStyle="danger">{this.props.params.busId}</Button></PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops stops={busStops}/>

                    </Col>
                </Row>
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
            </div>
        )

    }
}