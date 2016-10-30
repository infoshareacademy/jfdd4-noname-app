import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap'
import './LineStops.css';


const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
    stops: state.stopsData.stops.concat,
    hourValue: state.sliderData.hourValue
});

class BusTable extends React.Component {

    render() {

        var {
            buses,
            stops,
            hourValue
        } = this.props;

        return (

            <p>1</p>
        )

    }
}

export default connect(mapStateToProps)(BusTable)


