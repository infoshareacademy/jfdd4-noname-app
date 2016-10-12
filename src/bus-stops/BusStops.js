import React from 'react'
import data from '../data/data.js';

export default class BusStops extends React.Component {

    constructor() {
        super();

        this.state = {
            stops: []
        }
    }

    componentWillMount() {
        this.setState({
            stops: data.stops
        })
    }

    render() {

        return (
            <div>{this.state.stops.map(function (stop) {
                return <li key={stop.id}>{stop.name}</li>
            })}</div>

        );
    }
}

