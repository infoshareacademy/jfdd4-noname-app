import React from 'react';
import {Link} from 'react-router';
import data from '../data/data.js';
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'


export default class BusDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            stopArray: [],
            busArray: []
        }
    }

    componentWillMount() {
        this.setState({
            stopArray: data.stops,
            busArray: data.buses,
            busData: data
        })
    }

    render() {
        var currentBus = data.buses.find(function (bus) {
            return bus.lineNumber === parseInt(this.props.params.busId);
        }.bind(this));
        console.log(currentBus)


        return (

            <div>
                <h2>{currentBus.lineNumber}</h2>

                <ul>
                    {data.stops.filter(function (stop) {
                        return currentBus.stops.indexOf(stop.id) !== -1
                    }).map(function (stop) {
                        return (
                            <li key={stop.id}>
                                <Link to={`/bus-stops/${stop.id}`}>
                                    {stop.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div style={{width: '100%', height: '500px'}}>
                    <GoogleMap
                        bootstrapURLKeys={{
                            key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'
                        }}
                        center={[54.357267, 18.682472]}
                        zoom={12}>
                        {data.stops.filter(function (stop) {
                            return currentBus.stops.indexOf(stop.id) !== -1
                        }).map(function (stop) {
                            return <Place lat={stop.cox} lng={stop.coy} text={'B'}/>
                        })}
                    </GoogleMap>
                </div>
            </div>
        )

    }
}