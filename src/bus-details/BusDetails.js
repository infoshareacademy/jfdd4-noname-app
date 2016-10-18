import React from 'react';
import LineStops from '../line-stops/LineStops';
import {Row, Col} from 'react-bootstrap'


export default class BusDetails extends React.Component {

    render () {

        return(

            <Row>
                <Row>
                    <Col md={6}>
                            <h1>Linia {this.props.params.busId}</h1>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>

                        <LineStops busId={this.props.params.busId}/>

                    </Col>
                </Row>
            </Row>
        )

    }
}