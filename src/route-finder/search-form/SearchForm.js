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
        console.log(this.state.departValue, this.state.arriveValue)
        return (
            <form>

                <Typeahead
                    placeholder="Wpisz przystanek początkowy"
                    labelkey="depart"
                    onChange={selected => this.setState({departValue: selected})}
                    options={this.props.options}
                />
                <Typeahead
                    placeholder="Wpisz przystanek końcowy"
                    labelKey="arrive"
                    onChange={selected => this.setState({arriveValue: selected})}
                    options={this.props.options}
                />
                <Button>Wyszukaj trasę</Button>
            </form>
        )
    }
}
