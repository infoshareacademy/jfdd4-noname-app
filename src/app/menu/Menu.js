import React, {Component} from 'react';
import Item from './item/Item'
import logo from './logo.png';
import './Menu.css';
import {Navbar, Nav} from 'react-bootstrap'


class Menu extends Component {
    render() {
        return (
            <ul>
                <Navbar.Brand>
                    <img src={logo} className="Menu-logo" alt="logo"/>
                </Navbar.Brand>
                <Nav bsStyle="pills large" className="Menu">
                    <Item path={`/`}>Strona główna</Item>
                    <Item path={`/bus-stops`}>Lista przystanków</Item>
                    <Item path={`/bus-lines`}>Lista autobusów</Item>
                    <Item path={`/map`}>Mapa</Item>
                </Nav>
            </ul>
        )
    }
}

export default Menu;
