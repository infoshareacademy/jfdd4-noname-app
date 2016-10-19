import React from 'react';
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'


export default class BusDetails extends React.Component {

    render () {

        return(

            <div>
                <Row>
                    <Col md={6}>
                            <PageHeader>Linia <Button bsStyle="danger">{this.props.params.busId}</Button></PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops busId={this.props.params.busId}/>

                    </Col>
                </Row>
                <div style={{width: '100%', height: '500px'}}>
                    <GoogleMap
                        bootstrapURLKeys={{
                            key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                        }}
                        center={[54.357267, 18.682472]}
                        zoom={12}>
                        {data.stops.filter(function (stop) {
                            return currentBus.stops.indexOf(stop.id) !== -1
                        }).map(function (stop) {
                            return <Place lat={stop.cox} lng={stop.coy} text={'B'}/>
                        })}
                    </GoogleMap>
                </div>
            </div>
        )

    }
}