import React from 'react';
import Typeahead from 'react-bootstrap-typeahead';
import {Button} from 'react-bootstrap'

export default class SearchForm extends React.Component {

    constructor() {
        super();
        this.state = {
            departValue: 'Wpisz przystanek początkowy',
            arriveValue: 'Wpisz przystanek końcowy'
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.props.studentId, this.state.value)
            }}>
                <input
                    type="text"
                    defaultValue={this.state.value}
                    onChange={(event) => this.setState({
                        value: event.target.value
                    })} />

                <Typeahead
                    defaultValue={this.state.departValue}
                    point="depart"
                    onChange={event => this.setState({
                        departValue: event.target.value
                    })}
                    options={this.props.options}
                />
                <Typeahead
                    defaultValue={this.state.arriveValue}
                    point="arrive"
                    onChange={event => this.setState({
                        arriveValue: event.target.value
                    })}
                    options={this.props.options}
                />
                <Button>Wyszukaj trasę</Button>
            </form>
        )
    }
}