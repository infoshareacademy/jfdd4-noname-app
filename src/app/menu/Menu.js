import React, {Component} from 'react';
import Item from './item/Item'
import logo from './logo.png';
import './Menu.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap'


class Menu extends Component {
    render() {
        return (
        <Navbar default>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><img src={logo} className="Menu-logo" alt="logo"/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <Item path={`/`}>Strona główna</Item>
                    <Item path={`/bus-stops`}>Lista przystanków</Item>
                     <Item path={`/bus-lines`}>Lista autobusów</Item>
                     <Item path={`/map`}>Mapa</Item>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


        )
    }
}

export default Menu;
