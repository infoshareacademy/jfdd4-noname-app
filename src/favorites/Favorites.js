import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import '../bus-stops/BusStops.css'

const mapStateToProps = state => {
    var props = {
        fetchingFavoriteStops: state.favorites.fetchingFavoriteStops,
        fetchingFavoriteBuses: state.favorites.fetchingFavoriteBuses,
        favoriteStops: state.favorites.favoriteStops,
        favoriteBuses: state.favorites.favoriteBuses,
        buses: state.busesData.buses,
        stops: state.stopsData.stops
    };
    return (props);
};

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

         console.log('bbb',this.props);

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
                        {console.log('test', stop)}
                        return <ListGroupItem key={stop.id}>
                            <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}
                        </ListGroupItem>
                    })
                }
            </div>
            <div>
                <h3>Autobusy:</h3>
                {favoriteBuses
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


