import React from 'react';
import data from '../data/data.js';


export default class BusDetails extends React.Component {

    constructor () {
    super ();
        this.state = {
            stopArray: [],
            busArray: []
        }
    }

    componentWillMount () {
        this.setState ({
            stopArray: data.stops,
            busArray: data.buses,
            busData: data
        })
    }

    render () {
        console.log(this.props);
        var currentBus = data.buses.find(function(bus) {
            return bus.lineNumber == parseInt(this.props.params.busId);
        }.bind(this));


        return(

            <div>
                <h2>{this.props.params.busId}</h2>

                {data.stops.filter(function(stop) {
                    return currentBus.stops.indexOf(stop.id) != -1
                }).map(function(stop) {
                    return (<li key={stop.id}>{stop.name}</li>)
                })}

            </div>
        )

    }
}