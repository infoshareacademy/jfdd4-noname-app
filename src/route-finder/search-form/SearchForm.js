import React from 'react';
import Typeahead from 'react-bootstrap-typeahead';
import {Button} from 'react-bootstrap'

export default class SearchForm extends React.Component {

    constructor() {
        super();
        this.state = {
            departValue: [],
            arriveValue: []
        }
    }


    render() {

        var options = this.props.options;

        var {
            departValue,
            arriveValue
        }= this.state;

        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(departValue, arriveValue)
            }}>

                <Typeahead
                    placeholder="Wpisz przystanek początkowy"
                    labelkey="depart"
                    onChange={selected => this.setState({departValue: selected})}
                    options={options.filter(option => option !== arriveValue[0])}
                />
                <Typeahead
                    placeholder="Wpisz przystanek końcowy"
                    labelKey="arrive"
                    onChange={selected => this.setState({arriveValue: selected})}
                    options={options.filter(option => option !== departValue[0])}
                />
                <Button type="submit">Wyszukaj trasę</Button>
            </form>
        )
    }
}
