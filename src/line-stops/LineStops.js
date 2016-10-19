import React from 'react';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default class LineStops extends React.Component {

    render() {

        return (

            <ListGroup>
                {this.props.stops.map(function (stop) {
                    return (
                        <ListGroupItem key={stop.id}>
                            <Link to={`/bus-stops/${stop.id}`}>
                                {stop.name}
                            </Link>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )

    }
}


