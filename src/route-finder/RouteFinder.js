import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {setFilterValue} from '../bus-stops/actionCreators'
import Typeahead from 'react-bootstrap-typeahead';
import Map from '../map/Map'




const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    buses: state.busesData.lineNumber,
    currentFilterValue: state.stopsData.currentFilterValue
});

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue))
});

class RouteFinder extends React.Component {

    render() {
        var {
            stops,
            setFilterValue,
            currentFilterValue
        } = this.props;

        console.log('TEST', stops.map(stop=>stop.name))

        return (
            <div>
                <Col sm={6} className="BusStops-col">
                    <Typeahead
                        point="start"
                        onChange={this._handleChange}
                        options={stops.map(stop=>stop.name)}
                    />
                    <Typeahead
                        point="end"
                        onChange={this._handleChange}
                        options={stops.map(stop=>stop.name)}
                    />
                </Col>
                <Col sm={6} className="Map-col">
                    <div style={{width: '100%', height: '450px'}}>
                        <Map zoom={30} center={[54.352325, 18.671786]} points={stops}/>
                    </div>


                </Col>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder)