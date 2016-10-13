import React from 'react'
import data from '../data/data.js';
import Search from '../search/Search'
import {Link} from 'react-router'

export default class BusStops extends React.Component {

    constructor() {
        super();

        this.state = {
            stops: [],
            filterText: ''
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })

    }

    componentWillMount() {
        this.setState({
            stops: data.stops
        })
    }

    render() {
    let filteredBusStops = this.state.stops.filter(
        (name) => {
            return name.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        }

    );


        return (
            <div>
                <Search
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <ul>

                    {filteredBusStops.map(function (stop) {
                        return <li key={stop.id}>{stop.name}
                            <Link to={`/bus-stops/${stop.name}`}>Show</Link>

                        </li>
                    })}
                    {this.state.filterText}



                </ul>

            </div>

        );
    }
}

