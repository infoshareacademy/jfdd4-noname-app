import React from 'react';
import data from '../data/data.js';
import Bus from './Bus';
import Map from '../map/Map'

export default class BusStop extends React.Component {
    constructor() {
        super();

        this.state = {
            stops: [],
            buses: []
        }
    }

    componentWillMount() {
        this.setState({
            stops: data.stops,
            buses: data.buses
        })
    }

    render() {
        var busId = parseInt(this.props.params.busStopId);

        return (
            <div>

                {this.state.stops.filter(function (stop) {
                    return stop.id === busId
                }).map(function (stops) {
                    return <div>
                        <p>Przystanek:  {stops.name} </p>
                        <Map x={stops.cox} y={stops.coy}/>
                    </div>
                })}
                <br />
                Linie autobusowe przejeżdające przez dany przystanek:
                {this.state.buses.filter(function (bus) {
                    return bus.stops.indexOf(busId) !== -1
                }).map(function(bus) {
                    return <Bus>{bus.lineNumber}</Bus>
                })}
            </div>
        );
    }
}

