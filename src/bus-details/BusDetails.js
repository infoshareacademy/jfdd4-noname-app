import React from 'react';
import data from '../data/data.js';

export default class BusDetails extends React.Component {

    constructor() {
        super();


        this.state = {
            data: [],
            buses: [],
            activeFilter: 'BusNumber'
        }
    }
    render() {
    console.log(this.props);

        return (
            <div>
                <h1>{this.props.params.StopId}</h1>
            </div>
                
            )}

    }

