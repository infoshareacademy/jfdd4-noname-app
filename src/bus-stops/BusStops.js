import React from 'react'
import {ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {setFilterValue} from './actionCreators'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import './BusStops.css'
import {FormControl} from 'react-bootstrap'

const mapStateToProps = (state) => ({
    stops: state.stopsData.stops,
    fetchingStops: state.stopsData.fetchingStops,
    currentFilterValue: state.stopsData.currentFilterValue
});

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue))
});

class BusStops extends React.Component {

    render() {
        var {
            stops,
            setFilterValue,
            currentFilterValue
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
                        }).sort((s1,s2) => {
                            if (s1.name < s2.name) return -1;
                            else if (s1.name > s2.name) return 1;
                            else return 0;
                        })
                        .map(function (stop) {
                            return <ListGroupItem index={stop.id}>
                                <Link className="BusStops-list" to={`/bus-stops/${stop.id}`}>{stop.name}</Link> {''}

                            </ListGroupItem>
                        })}</ReactCSSTransitionGroup></div>

            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BusStops)