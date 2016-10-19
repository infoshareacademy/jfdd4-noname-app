import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { setFilterValue } from './actionCreators'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    lineNumber: state.busesData.lineNumber,
    fetchingLineNumbers: state.busesData.fetchingLineNumbers,
    currentFilterValue: state.busesData.currentFilterValue
})

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue))
});

class BusLines extends React.Component{

    render () {
        var {
            lineNumber,
            setFilterValue,
            currentFilterValue,
            fetchingLineNumbers
        } = this.props


        return (
            <div>
                <h1>Lista linii autobusowych:</h1>

                <p>
                    <input
                        placeholder="Wpisz szukaną linię"
                        onChange={(event) => setFilterValue(event.target.value)}
                    />
                </p>
                <ListGroup>
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
                    })}
                </ListGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusLines)