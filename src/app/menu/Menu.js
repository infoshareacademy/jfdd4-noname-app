import React, {Component} from 'react';
import {Link} from 'react-router'
import logo from './logo.png';
import './Menu.css';
import LoginForm from '../../log-in/LoginForm'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, Glyphicon, NavDropdown} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    favoriteStops: state.favorites.favoriteStops,
    favoriteBuses: state.favorites.favoriteBuses,
    userName: state.login.username
});


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
                        <IndexLinkContainer to={`/map`}>
                            <NavItem eventKey={1} href="#">Mapa</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to={`/bus-stops`}>
                            <NavItem eventKey={2} href="#">Lista przystanków</NavItem>
                        </LinkContainer>
                        <LinkContainer to={`/bus-lines`}>
                            <NavItem eventKey={3} href="#">Lista autobusów</NavItem>
                        </LinkContainer>
                        <LinkContainer to={`/route-finder`}>
                            <NavItem eventKey={4} href="#">Znajdź trasę</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to={`/favorites`}>
                            <NavItem eventKey={5} href="#">Ulubione ({this.props.favoriteStops.length},{this.props.favoriteBuses.length})</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={6} title={this.props.userName} id="basic-nav-dropdown">
                            <LoginForm />
                        </NavDropdown>
                      </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default connect(mapStateToProps)(Menu)
