import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem, Button, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {saveDestinations} from './actionCreators'
import Map from '../map/Map'
import SearchForm from './search-form/SearchForm'
import RouteDetails from './route-details/RouteDetails'




const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    buses: state.busesData.lineNumber,
    departValue: state.findRoute.departValue,
    arriveValue: state.findRoute.arriveValue
});

const mapDispatchToProps = (dispatch) => ({
    saveDestinations: (departValue, arriveValue) => {
        dispatch(saveDestinations(departValue, arriveValue));
        console.log(departValue,arriveValue)
    }
});

class RouteFinder extends React.Component {

    render() {
        var {
            stops,
            departValue,
            arriveValue,
            saveDestinations
        } = this.props;

        if (stops.length === 0) {
            return <div>Trwa ładowanie danych...</div>
        }

        var sortedStopsNames = stops
            .sort((s1,s2) => {
                if (s1.name < s2.name) return -1;
                else if (s1.name > s2.name) return 1;
                else return 0;}
            ).map(stop=>stop.name);

        var isSearchFormEmpty = departValue.length === 0 && arriveValue.length === 0;

        console.log(isSearchFormEmpty);
        console.log(sortedStopsNames);

        return (
            <div>
                <Col sm={6} className="BusStops-col">
                    <SearchForm
                        handleSubmit={saveDestinations}
                        options={sortedStopsNames}
                    />
                    {isSearchFormEmpty ? null : <RouteDetails/>}
                </Col>
                <Col sm={6} className="Map-col">
                    <div style={{width: '100%', height: '450px'}}>
                        <Map zoom={13} center={stops} points={stops}/>
                    </div>


                </Col>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder)