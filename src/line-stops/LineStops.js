import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap'
import './LineStops.css';


const mapStateToProps = (state) => ({
    buses: state.busesData.buses,
});

class LineStops extends React.Component {

    render() {

        var {
            buses,
        } = this.props;


        return (

            <div>

            <ListGroup className="LineStops-ListChild" >
                {this.props.stops.map(stop =>
                    (
                        <ListGroupItem  key={stop.id}>
                            <Link  to={`/bus-stops/${stop.id}`}>
                                {stop.name + " "}
                            </Link>
                                <div>
                                    <content>Dostępne przesiadki:</content>
                                        {buses
                                            .filter(bus => bus.stops.indexOf(stop.id) !== -1 && bus.lineNumber !== this.props.currentBus)
                                            .map(function (filteredLineNumber, index) {
                                                return (
                                                    <content key={index}>
                                                        {/*<BusLink bus={filteredLineNumber}/>*/}
                                                        <content key={index}>
                                                            <content>{" "}</content>
                                                            <Label>
                                                                <Link to={`/bus-details/${filteredLineNumber.lineNumber}`}>
                                                                    {filteredLineNumber.lineNumber}
                                                                </Link>
                                                            </Label>
                                                        </content>
                                                    </content>
                                                )
                                            })

                                        }
                                </div>
                        </ListGroupItem>
                    )

                )}
            </ListGroup>
                </div>
        )

    }
}

export default connect(mapStateToProps)(LineStops)


