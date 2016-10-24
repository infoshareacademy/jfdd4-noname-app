import React, {Component} from 'react';
import './App.css';
import Menu from './menu/Menu'
import {Grid, Row, Col} from 'react-bootstrap'
import iconmonstremail from './social-icons/iconmonstremail.svg'
import iconmonstrfacebook from './social-icons/iconmonstrfacebook.svg'
import iconmonstrtwitter from './social-icons/iconmonstrtwitter.svg'


class App extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Menu />
                </Row>
                <Row className="show-grid App-change">
                    <Col xs={12}>{this.props.children}</Col>
                </Row>
                <section className="App-contact">
                    <Col xs={4} xsOffset={4}>
                        <Col xs={4} className="App-col">
                            <div className="Social-icon"><a href="mailto:isaikarus@gmail.com" target="_blank"><img src={iconmonstremail} className="App-img"
                                                                             alt="email"/></a>
                            </div>
                        </Col>
                        <Col xs={4} className="App-col">
                            <div className="Social-icon"><a href="http://facebook.com" target="_blank"><img src={iconmonstrfacebook}
                                                                             className="App-img"
                                                                             alt="fb"/></a>
                            </div>
                        </Col>
                        <Col xs={4} className="App-col">
                            <div className="Social-icon"><a href="http://twitter.com" target="_blank"><img src={iconmonstrtwitter} className="App-img"
                                                                             alt="twitter"/></a>
                            </div>
                        </Col>
                    </Col>
                </section>
            </Grid>
        );
    }
}

export default App;

