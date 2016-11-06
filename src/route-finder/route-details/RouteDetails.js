import React from 'react';
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon, Label, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {addFavoriteBus, deleteFavoriteBus} from '../../favorites/actionCreators'


const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    buses: state.busesData.lineNumber,
    departValue: state.findRoute.departValue,
    arriveValue: state.findRoute.arriveValue
});

const mapDispatchToProps = (dispatch) => ({
    addFavoriteBus: (lineNumber) => dispatch(addFavoriteBus(lineNumber)),
    deleteFavoriteBus: (busId) => dispatch(deleteFavoriteBus(busId))
});

class RouteDetails extends React.Component {


    render() {
        var {
            stops,
            buses,
            departValue,
            arriveValue,
            addFavoriteBus,
            deleteFavoriteBus
        } = this.props;

        // if (stops === undefined) {
        //     return <div>Trwa ładowanie danych...</div>
        // }

        var departStop = stops.filter(stop => stop.name === departValue[0]);
        var arriveStop = stops.filter(stop => stop.name === arriveValue[0]);
        var availableBuses = buses.map(bus => bus.lineNumber);



        return (
            <div>
                <h4>Szczegóły trasy:{' '}
                    <Link to={`/bus-stops/${departStop[0].id}`}>
                        {departValue}
                    </Link>
                    <Glyphicon glyph="arrow-right"/>
                    <Link to={`/bus-stops/${arriveStop[0].id}`}>
                        {arriveValue}
                    </Link>
                </h4>
                <p> </p>
                <p>Dostępne autobusy:</p>
                <ul>
                    {availableBuses.map(bus => {
                        return <li key={bus}>{bus}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetails)