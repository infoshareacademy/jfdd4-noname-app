import React from 'react';
import { Link } from 'react-router';
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

        return (
            <div>
                <h1>Lista linii autobusowych:</h1>
                <ul>
                    {mapBusArray.map(function (busListItem, index) {
                        return <li key={index}>
                            <Link to={`/bus-details/${busListItem.lineNumber}`}>
                                {busListItem.lineNumber}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
