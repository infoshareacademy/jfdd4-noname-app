import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import '../bus-stops/BusStops.css'
import {deleteFavoriteStop, deleteFavoriteBus} from './actionCreators'
import {Glyphicon} from 'react-bootstrap'


const mapStateToProps = state => ({
    favoriteStops: state.favorites.favoriteStops,
    favoriteBuses: state.favorites.favoriteBuses,
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

const mapDispatchToProps = (dispatch) => ({
    deleteFavoriteStop: (stopId) => dispatch(deleteFavoriteStop(stopId)),
    deleteFavoriteBus: (lineNumber) => dispatch(deleteFavoriteBus(lineNumber))
});


const Favorites = ({
    favoriteStops,
    favoriteBuses,
    deleteFavoriteStop,
    deleteFavoriteBus,
    stops
}) => (<div>
            <h1>Ulubione</h1>
            <div>
                <h3>Przystanki:</h3>

                {stops
                    .filter(function (stop) {
                        return favoriteStops.map(a=>a.id).indexOf(stop.id) !== -1;
                    }).sort((s1,s2) => {
                        if (s1.name < s2.name) return -1;
                        else if (s1.name > s2.name) return 1;
                        else return 0;
                    }).map(function (stop) {
                        return <ListGroupItem key={stop.id}>
                            <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}
                            <button onClick={() => deleteFavoriteStop(stop.id)}> delete </button>
                        </ListGroupItem>
                    })
                }
            </div>
            <div>
                <h3>Autobusy:</h3>
                {favoriteBuses
                    .sort((b1,b2) => {
                        if (b1.lineNumber < b2.lineNumber) return -1;
                        else if (b1.lineNumber > b2.lineNumber) return 1;
                        else return 0;
                    }).map(function (bus) {
                        return <ListGroupItem key={bus.id}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link>{' '}
                            <button onClick={() => deleteFavoriteBus(bus.id)}> delete </button>
                        </ListGroupItem>
                    })}
            </div>
        </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


