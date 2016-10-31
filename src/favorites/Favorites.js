import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import '../bus-stops/BusStops.css'
import {deleteFavoriteStop, deleteFavoriteBus} from './actionCreators'
import {Glyphicon} from 'react-bootstrap'


const mapStateToProps = state => {
    var props = {
        favoriteStops: state.favorites.favoriteStops,
        favoriteBuses: state.favorites.favoriteBuses,
        buses: state.busesData.buses,
        stops: state.stopsData.stops
    };
    return (props);
};

const mapDispatchToProps = (dispatch) => ({
    deleteFavoriteStop: (stopId) => dispatch(deleteFavoriteStop(stopId)),
    deleteFavoriteBus: (lineNumber) => dispatch(deleteFavoriteBus(lineNumber))
});


class Favorites extends React.Component {
    render() {
        var {
            favoriteStops,
            favoriteBuses,
            deleteFavoriteStop,
            deleteFavoriteBus,
            stops,
        } = this.props;


        return <div>
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
                            <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>
                                {stop.name}
                            </Link> {''}
                            <Glyphicon glyph="star" onClick={deleteFavoriteStop(stop.id)}/>
                        </ListGroupItem>
                    })
                }
            </div>
            <div>
                <h3>Autobusy:</h3>
                {favoriteBuses
                    .sort((s1,s2) => {
                        if (s1.name < s2.name) return -1;
                        else if (s1.name > s2.name) return 1;
                        else return 0;
                    }).map(function (bus, index) {
                        return <ListGroupItem key={index}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link> {''}
                            <Glyphicon glyph="star" onClick={deleteFavoriteBus(bus.lineNumber)}/>
                        </ListGroupItem>
                    })}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


