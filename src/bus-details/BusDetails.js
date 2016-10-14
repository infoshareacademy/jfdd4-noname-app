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
        /*console.log(this.state.stopArray);
        console.log(this.state.busArray);
        console.log(this.state.data);*/

        var obecnyAutobus = parseInt(this.props.params.busId);

        console.log(obecnyAutobus + " obecny autobus");

        return(

            <div>
                <h2>{this.props.params.busId}</h2>

                <ul>
                    {data.buses.filter(function (selectBusLine) {
                        var selectedBusLine = selectBusLine.id === obecnyAutobus;
                        console.log(selectedBusLine);
                        return selectedBusLine;
                    }).map(function (item) {
                        console.log(item);
                        return item;
                    }).map(function (clickedBus) {
                        return <li key={clickedBus.id}>{clickedBus.stops}</li>
                    })}

                </ul>
            </div>
        )

    }
}

