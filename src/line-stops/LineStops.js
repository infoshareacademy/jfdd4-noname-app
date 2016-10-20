import React from 'react';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap'
import data from '../data/data.js'

export default class LineStops extends React.Component {

    render() {

        var currentStop;

        return (

            <ListGroup>
                {this.props.stops.map(function (stop) {
                    console.log(stop, "------");
                    console.log(data.buses.map(function(xyz)
                    {
                      console.log(xyz, "++++++++++++")
                    }));
                    return (
                        <ListGroupItem key={stop.id}>
                            <Link to={`/bus-stops/${stop.id}`}>
                                {stop.name + " "}
                            </Link>
                                <div>
                                    <content>Dostępne przesiadki:</content>
                                {data.buses.filter(function(fff) {
                                    console.log(fff, "ooooooooooooooo");
                                    return currentStop = fff.stops.indexOf(stop.id) !== -1;
                                }).map(function (dupa) {
                                    console.log(dupa, "***********************");
                                    console.log(dupa.lineNumber, "xxxxxxxxxxxxxxxxx");
                                    return (
                                        <content>
                                            <content>{" "}</content>
                                            <Label>
                                                <Link to={`/bus-details/${dupa.lineNumber}`}>
                                                    {dupa.lineNumber}
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


