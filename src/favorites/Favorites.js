import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem} from 'react-bootstrap'
import '../bus-stops/BusStops.css'

const mapStateToProps = state => ({
    fetchingFavoriteStops: state.favorites.fetchingFavoriteStops,
    fetchingFavoriteBuses: state.favorites.fetchingFavoriteBuses,
    favoriteStops: state.favorites.favoriteStops,
    favoriteBuses: state.favorites.favoriteBuses,
    buses: state.busesData.buses,
    stops: state.stopsData.stops
});

// const mapDispatchToProps = (dispatch) => ({
//
// });


class Favorites extends React.Component {
    render() {
        var {
            fetchingFavoriteStops,
            fetchingFavoriteBuses,
            favoriteStops,
            favoriteBuses,
            stops,
            buses
        } = this.props;

        console.log(favoriteBuses)
        console.log(favoriteStops)

        return <div>
            <h1>Ulubione</h1>
            <div>
                <h2>Przystanki:</h2>
                {stops
                    .filter(function (stop) {
                        return favoriteStops.indexOf(stop.id) !== -1;
                    }).sort((s1,s2) => {
                        if (s1.name < s2.name) return -1;
                        else if (s1.name > s2.name) return 1;
                        else return 0;
                    }).map(function (stop) {
                        return <ListGroupItem key={stop.id}>
                            <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}
                        </ListGroupItem>
                    })
                }
            </div>
            <div>
                <h2>Autobusy:</h2>
                {buses
                    .filter(function (bus) {
                        return favoriteBuses.indexOf(bus.lineNumber) !== -1;
                    })
                    .map(function (bus, index) {
                        return <ListGroupItem key={index}>
                            <Link to={`/bus-details/${bus.lineNumber}`}>
                                {bus.lineNumber}
                            </Link>
                        </ListGroupItem>
                    })}
            </div>
        </div>
    }
}

export default connect(mapStateToProps)(Favorites)


