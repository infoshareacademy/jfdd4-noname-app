import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    lineNumber: state.busesData.lineNumber,
    fetchingLineNumbers: state.busesData.fetchingLineNumbers
})

class BusLines extends React.Component{

    render () {
        var {
            lineNumber,
            fetchingLineNumbers
        } = this.props

        return (
            <div>
                <h1>Lista linii autobusowych:</h1>

                <ListGroup>
                    {lineNumber.map(function (busListItem, index) {
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

export default connect(mapStateToProps)(BusLines)