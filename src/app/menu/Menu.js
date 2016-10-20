import React, {Component} from 'react';
import {Link} from 'react-router'
import logo from './logo.png';
import './Menu.css';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem} from 'react-bootstrap'


class Menu extends Component {
    render() {
        return (
            <Navbar default>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={`/`}><img src={logo} className="Menu-logo" alt="logo"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to={`/`}>
                            <NavItem eventKey={0} href="#">Mapa przystanków</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to={`/bus-stops`}>
                            <NavItem eventKey={1} href="#">Lista przystanków</NavItem>
                        </LinkContainer>
                        <LinkContainer to={`/bus-lines`}>
                            <NavItem eventKey={2} href="#">Lista autobusów
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to={'*'}>
                            <NavItem eventKey={3} href="#">Zaloguj się</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;
