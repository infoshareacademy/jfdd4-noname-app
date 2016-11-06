import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem, Button, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {setFilterValue} from '../bus-stops/actionCreators'
import Typeahead from 'react-bootstrap-typeahead';
import Map from '../map/Map'
import SearchForm from './search-form/SearchForm'




const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    buses: state.busesData.lineNumber,
    currentFilterValue: state.stopsData.currentFilterValue
});

const mapDispatchToProps = (dispatch) => ({

});

class RouteFinder extends React.Component {

    render() {
        var {
            stops,
        } = this.props;

        if (stops.length === 0) {
            return <div>Trwa ładowanie danych...</div>
        }

        var beginStop;
        var arriveStop;

        console.log('TEST', stops.map(stop=>stop.name));

        return (
            <div>
                <Col sm={6} className="BusStops-col">
                    <SearchForm options={stops
                        .sort((s1,s2) => {
                            if (s1.name < s2.name) return -1;
                            else if (s1.name > s2.name) return 1;
                            else return 0;}
                        )
                        .map(stop=>stop.name)
                    }
                    />
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