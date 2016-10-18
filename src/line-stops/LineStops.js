import React from 'react';
import { Link } from 'react-router';
import data from '../data/data.js';

export default class LineStops extends React.Component {

    render() {

        console.log(this.props);
        var currentBus = data.buses.find(function(bus) {
            return bus.lineNumber == parseInt(this.props.busId);
        }.bind(this));

        return (


            <ul>
                {data.stops.filter(function (stop) {
                    return currentBus.stops.indexOf(stop.id) != -1
                }).map(function (stop) {
                    return (
                        <li key={stop.id}>
                            <Link to={`/bus-stops/${stop.id}`}>
                                {stop.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )

    }
}


