import React from 'react'
//import data from '../data/data.js';
//import Search from '../search/Search'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {markStopAsFavorite} from './actionCreators'

const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    fetchingStops: state.stopsData.fetchingStops,

});

const mapDispatchToProps = (dispatch) => ({
    favouriteStop: (stopId) => dispatch(markStopAsFavorite(stopId))
});


const BusStops = ({
    stops,
    fetchingCourses,
    favouriteStop

}) => (
    <div>
        <div>   {stops.map(function (stop) {
            return <li key={stop.id}>
                <Link to={`/bus-stops/${stop.id}`}>{stop.name}</Link>
                <button onClick={() => favouriteStop(stop.id)}>
                    (+)
                </button>
            </li>
        })}</div>
    </div>
);


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