import React from 'react';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default class LineStops extends React.Component {

    render() {

        var przesiadka;

        return (

            <ListGroup>
                {this.props.stops.map(function (stop) {
                    return (
                        <ListGroupItem key={stop.id}>
                            <Link to={`/bus-stops/${stop.id}`}>
                                {stop.name}
                                {przesiadka = data.stops.find(function (czyMozliwa) {
                                    czyMozliwa.id ===
                                }) }
                            </Link>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )

    }
}


