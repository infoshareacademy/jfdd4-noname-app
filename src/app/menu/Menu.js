import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap'
import { Link } from 'react-router'


class Menu extends Component {
    render() {
        return (
            <div className="App">

                <Nav bsStyle="pills" className="App-intro">
                    <NavItem><Link to={`/bus-stops`}>Lista przystanków</Link></NavItem> {''}
                    <NavItem><Link to={`/bus-lines`}>Lista autobusów</Link></NavItem>
                </Nav>

            </div>
        );
    }
}

export default Menu;
