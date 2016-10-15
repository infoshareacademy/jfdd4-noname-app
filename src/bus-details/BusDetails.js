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
        var obecnyAutobus = data.buses.find(function(b) {
            return b.lineNumber == parseInt(this.props.params.busId);
        }.bind(this));


        return(

            <div>
                <h2>{this.props.params.busId}</h2>

                {data.stops.filter(function(s) {
                    return obecnyAutobus.stops.indexOf(s.id) != -1
                }).map(function(s) {
                    return (<li key={s.id}>{s.name}</li>)
                })}

            </div>
        )

    }
}