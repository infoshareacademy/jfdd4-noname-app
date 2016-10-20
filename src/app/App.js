import React, {Component} from 'react';
import './App.css';
import Menu from './menu/Menu'
import {Grid, Row, Col} from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

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


                </Grid>

        );
    }
}

export default App;
