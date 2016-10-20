import React from 'react';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import data from '../data/data.js'

export default class LineStops extends React.Component {

    render() {
        var zmapowaneStopy =  data.buses.map(function(xyz) {
            return xyz;
        });

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
                                {stop.name}
                                {currentStop = zmapowaneStopy.stops.filter(function(dupa){
                               console.log(dupa)})
                                }
                            </Link>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )

    }
}


