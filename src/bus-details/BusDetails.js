import React from 'react';
import data from '../data/data.js';

export default class BusDetails extends React.Component {

    constructor () {
    super ();

        this.state = {
            stopZ: [],
            buseZ: []
        }
    }

    componentWillMount () {
        this.setState ({
            stopZ: data.stops,
            buseZ: data.buses
        })
    }

    render () {
        console.log(this.state.stopZ);
        console.log(this.state.buseZ);
        console.log(this.state.data);

        var listaPrzystankow = [];

        return(

            <div>

                {this.state.stopZ.map(function (stopsList) {
                    console.log(stopsList);
                })}

                {this.state.buseZ.map(function (busList) {
                    console.log(busList.stops);
                    busList.stops.forEach(function(busNumber) {
                        console.log(busNumber);
                        }
                    )
                })}
            </div>
        )

    }
}

