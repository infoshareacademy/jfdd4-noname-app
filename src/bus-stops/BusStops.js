import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {markStopAsFavorite} from './actionCreators'
import {setFilterValue} from './actionCreators'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import './BusStops.css'
import {Glyphicon, Button, FormControl} from 'react-bootstrap'

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
                <p><FormControl
                    placeholder="Wpisz szukany przystanek"
                    defaultValue=""
                    onChange={(event) => setFilterValue(event.target.value)}

                /></p>
                <div><ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={500}>
                    {stops
                        .filter(function (stop) {
                            return stop.name.toLowerCase().indexOf(currentFilterValue.toLowerCase()) !== -1;
                        })

                        .map(function (stop) {
                            return <ListGroupItem key={stop.id}>
                                <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}
                                <Button onClick={() => favouriteStop(stop.id)} bsSize="xsmall"><Glyphicon glyph="star"/></Button>
                            </ListGroupItem>
                        })}</ReactCSSTransitionGroup></div>

            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BusStops)