import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {setFilterValue} from './actionCreators'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

const mapStateToProps = (state) => ({
    lineNumber: state.busesData.lineNumber,
    currentFilterValue: state.busesData.currentFilterValue
})

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue))
});

class BusLines extends React.Component {

    render() {
        var {
            lineNumber,
            setFilterValue,
            currentFilterValue,
        } = this.props;


        return (
            <div>
                <p>
                    <FormControl
                        placeholder="Wpisz szukaną linię"
                        defaultValue=""
                        onChange={(event) => setFilterValue(event.target.value)}
                    />
                </p>
                <ListGroup>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={500}>
                    {lineNumber
                        .filter(function (number) {
                            return number.lineNumber.toString().indexOf(currentFilterValue.toString()) !== -1;
                        })
                        .map(function (busListItem, index) {
                            return <ListGroupItem key={index}>
                                <Link to={`/bus-details/${busListItem.lineNumber}`}>
                                    {busListItem.lineNumber}
                                </Link>
                            </ListGroupItem>
                        })}</ReactCSSTransitionGroup>
                </ListGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusLines)