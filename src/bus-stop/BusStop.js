import React from 'react'
import data from '../data/data.js';

export default class BusStop extends React.Component {

    constructor() {
        super();

        this.state = {
            stops: [],
        }
    }


    componentWillMount() {
        this.setState({
            stops: data.stops
        })
    }

    render() {
        return (
            <div>

                <ul>

                    {this.state.stops.find(function (stop) {
                        return <li key={stop.id}>{stop.name}


                        </li>
                    })}


                </ul>

            </div>

        );
    }
}

