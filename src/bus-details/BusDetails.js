import React from 'react';
import LineStops from '../line-stops/LineStops';
import {Button, PageHeader, Row, Col} from 'react-bootstrap'


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
            </div>
        )

    }
}