import React from 'react'
import data from '../data/data.js';

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
                    return <p>Przystanek:  {stops.name} </p>
                })}
                <br />
                Linie autobusowe przejeżdające przez dany przystanek:
                {this.state.buses.filter(function (bus) {
                    return bus.stops.indexOf(busId) !== -1
                }).map(function(bus) {
                    return <p>{bus.lineNumber}</p>
                })}
            </div>
        );
    }
}

