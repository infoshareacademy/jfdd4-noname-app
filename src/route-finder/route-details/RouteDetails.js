import React from 'react';
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon, Label, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {addFavoriteBus, deleteFavoriteBus} from '../../favorites/actionCreators'
import busstopicon from '../../bus-stop/busstopicon.gif';


const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    buses: state.busesData.buses,
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

        if (stops === undefined) {
            return <div>Trwa ładowanie danych...</div>
        }

        var departStop = stops.filter(stop => stop.name === departValue[0]);
        var arriveStop = stops.filter(stop => stop.name === arriveValue[0]);
        var departStopId = departStop.map(s=>s.id);

        var availableBuses = buses
            .filter(bus => bus.stops.indexOf(departStop[0].id) !== -1)
            .filter(bus => bus.stops.indexOf(arriveStop[0].id) !== -1);


        return (
            <div>
                <h4>Szczegóły trasy:{' '}
                    <Link to={`/bus-stops/${departStop[0].id}`}>
                        {departValue}
                    </Link>{' '}
                    <Glyphicon glyph="arrow-right"/>{' '}
                    <Link to={`/bus-stops/${arriveStop[0].id}`}>
                        {arriveValue}
                    </Link>
                </h4>
                <p>Dostępne autobusy:</p>

                {availableBuses
                    .map((bus) => {
                        return (
                            <Col sm={6} className="BusStop-col">
                                <div>
                                    <Panel header={<div><Link to={`/bus-details/${bus.lineNumber}`}>
                                        <img src={busstopicon} alt="busstopicon"/>
                                        <Label style={{'margin': '2px'}}>{bus.lineNumber}</Label>
                                    </Link>
                                        <p>{departStop.map(function (stop) {
                                            return <span> {stop.name} </span>
                                        })}</p>
                                    </div>
                                    }>
                                        <p>{bus.routes.map(function (route) {
                                            return <b>{route[departStopId] + ' '}</b>
                                        })}</p>
                                    </Panel>
                                </div>
                            </Col>
                        )
                    }
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteDetails)
                // <ul>
                //     {availableBuses.map(bus => {
                //         return <li key={bus.lineNumber}>
                //             <Link to={`/bus-details/${bus.lineNumber}`}>
                //                 {bus.lineNumber}
                //             </Link>
                //         </li>
                //     })}
                // </ul>
