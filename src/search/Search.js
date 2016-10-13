import React, {Component} from 'react'
import {FormGroup} from 'react-bootstrap'

class Search extends Component {
    filterUpdate() {
        const val = this.myValue.value;

        this.props.filterUpdate(val);
    }

    render() {
        return (
            <FormGroup>
                <input
                    type="text"
                    ref={ (value) => {this.myValue = value} }
                    placeholder="Wpisz szukany przystanek ..."
                    onChange={this.filterUpdate.bind(this)}
                />
            </FormGroup>
        )
    }
}

export default Search