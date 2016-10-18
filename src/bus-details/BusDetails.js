import React from 'react';
import { Link } from 'react-router';
import data from '../data/data.js';
import {Grid, Row, Col} from 'react-bootstrap'


export default class BusDetails extends React.Component {

    constructor () {
    super ();
        this.state = {
            stopArray: [],
            busArray: []
        }
    }

    componentWillMount () {
        this.setState ({
            stopArray: data.stops,
            busArray: data.buses,
            busData: data
        })
    }

    render () {
        console.log(this.props);
        var currentBus = data.buses.find(function(bus) {
            return bus.lineNumber == parseInt(this.props.params.busId);
        }.bind(this));


        return(

            <Row>
                <Row>
                    <Col md={6}>
                            <h1>Linia {this.props.params.busId}</h1>
                    </Col>
                </Row>
                <Col md={6}>

                <h2>Kierunek: Śluza</h2>
                <ul>
                {data.stops.filter(function(stop) {
                    return currentBus.stops.indexOf(stop.id) != -1
                }).map(function(stop) {
                    return (
                        <li key={stop.id}>
                            <Link to={`/bus-stops/${stop.id}`}>
                                {stop.name}
                            </Link>
                        </li>
                    )
                })}
                </ul>
                    </Col>


                <Col md={6}>
                <h2>Kierunek: Przeróbka</h2>
                <ul>
                    {data.stops.filter(function(stop) {
                        return currentBus.stops.indexOf(stop.id) != -1
                    }).reverse().map(function (stop) {
                        return (
                            <li key={stop.id}>
                                <Link to={`/bus-stops/${stop.id}`}>
                                    {stop.name}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
                    </Col>

            </Row>
        )

    }
}