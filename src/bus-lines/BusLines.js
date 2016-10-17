import React from 'react';
import data from '../data/data.js';


export default class BusLines extends React.Component{

    constructor () {
        super();

        this.state = {
            busesArray: []
        }

    }

    componentWillMount () {
        this.setState ({
            busesArray: data.buses
        })
    }



    render () {

        var mapBusArray = this.state.busesArray;
        console.log(mapBusArray);

        return (
            <div>
                <h1>Lista linii autobusowych:</h1>
                <ul>
                    {mapBusArray.map(function (busListItem, index) {
                        return <li key={index}>
                            {busListItem.lineNumber}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
