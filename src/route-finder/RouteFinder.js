import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {setFilterValue} from '../bus-stops/actionCreators'
import Typeahead from 'react-bootstrap-typeahead';



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
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder)