import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap'
import './LineStops.css';


const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

class BusTable extends React.Component {

    render() {

        var {
        } = this.props;

        return (

            <p>1</p>
        )

    }
}

export default connect(mapStateToProps)(BusTable)


