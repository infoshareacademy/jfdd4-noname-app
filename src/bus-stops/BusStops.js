import React from 'react'
import data from '../data/data.js';
import Search from '../search/Search'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {markStopAsFavorite} from './actionCreators'
import { setFilterValue } from './actionCreators'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import './BusStops.css'
import {Glyphicon, Button} from 'react-bootstrap'

const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    fetchingStops: state.stopsData.fetchingStops,
    currentFilterValue: state.stopsData.currentFilterValue

});

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue)),
    favouriteStop: (stopId) => dispatch(markStopAsFavorite(stopId))
});

class BusStops extends React.Component {

    render() {
        var {
            stops,
            fechingStops,
            setFilterValue,
            currentFilterValue,
            favouriteStop
        } = this.props;


        return (

            <div>
                <p>Znajdz przystanek: <input
                    placeholder="Wpisz szukany przystanek"
                    defaultValue=""
                    onChange={(event) => setFilterValue(event.target.value)}

                /></p>
                <div>  <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={500}>
                    {stops
                        .filter(function(stop) {
                            return stop.name.toLowerCase().indexOf(currentFilterValue.toLowerCase()) !== -1;
                        })

                        .map(function (stop) {
                            return <li key={stop.id}>
                                <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}
                                    <Button onClick={() => favouriteStop(stop.id)} bsSize="xsmall"><Glyphicon glyph="star" /> Dodaj do ulubionych</Button>
                            </li>
                        })}</ReactCSSTransitionGroup></div>

            </div>

        )
    }
}


// export default class BusStops extends React.Component {
//
//     constructor() {
//         super();
//
//         this.state = {
//             stops: [],
//             filterText: ''
//         }
//     }
//
//     filterUpdate(value) {
//         this.setState({
//             filterText: value
//         })
//
//     }
//
//     componentWillMount() {
//         this.setState({
//             stops: data.stops
//         })
//     }
//
//     render() {
//     let filteredBusStops = this.state.stops.filter(
//         (name) => {
//             return name.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
//         }
//
//     );
//         return (
//             <div>
//                 <Search
//                     filterText={this.state.filterText}
//                     filterUpdate={this.filterUpdate.bind(this)}
//                 />
//                 <ul>
//                     {filteredBusStops.map(function (stop) {
//                         return <li key={stop.id}>
//                             <Link to={`/bus-stops/${stop.id}`}>{stop.name}</Link>
//
//                         </li>
//                     })}
//                     {this.state.filterText}
//                 </ul>
//             </div>
//         );
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(BusStops)