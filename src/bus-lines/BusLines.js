import React from 'react';
import { Link } from 'react-router';
import data from '../data/data.js';
import { ListGroup, ListGroupItem } from 'react-bootstrap'


export default class BusLines extends React.Component{

    constructor () {
        super();

        this.state = {
            busesArray: []
        }

    }

    componentWillMount () {
        this.setState ({
            busesArray: data.buses
        })
    }

    render () {
        var mapBusArray = this.state.busesArray;

        return (
            <div>
                <h1>Lista linii autobusowych:</h1>

                <ListGroup>
                    {mapBusArray.map(function (busListItem, index) {
                        return <ListGroupItem key={index}>
                            <Link to={`/bus-details/${busListItem.lineNumber}`}>
                                {busListItem.lineNumber}
                            </Link>
                        </ListGroupItem>
                    })}
                </ListGroup>
            </div>
        )
    }
}
