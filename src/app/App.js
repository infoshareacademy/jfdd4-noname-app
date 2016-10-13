import React, {Component} from 'react';
import './App.css';
import Menu from './menu/Menu'
import {Grid, Row, Col} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Grid>
                    <Row className="show-grid App-change">
                        <Col xs={12} md={8}>{this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
