import React from 'react';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap'
import data from '../data/data.js'
import './LineStops.css';


export default class LineStops extends React.Component {

    render() {

        var currentStop;

        return (

            <ListGroup className="LineStops-ListChild" >
                {this.props.stops.map(function (stop) {
                    return (
                        <ListGroupItem  key={stop.id}>
                            <Link  to={`/bus-stops/${stop.id}`}>
                                {stop.name + " "}
                            </Link>
                                <div>
                                    <content>Dostępne przesiadki:</content>
                                        {data.buses
                                            .filter(function(filteredBuses) {
                                                return currentStop = filteredBuses.stops.indexOf(stop.id) !== -1;
                                                    }).map(function (filteredLineNumber, index) {
                                                        return (
                                                            <content key={index}>
                                                                <content>{" "}</content>
                                                                <Label>
                                                                    <Link to={`/bus-details/${filteredLineNumber.lineNumber}`}>
                                                                        {filteredLineNumber.lineNumber}
                                                                    </Link>
                                                                </Label>
                                                            </content>
                                                        )
                                                    })

                                        }
                                </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )

    }
}


