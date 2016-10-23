import React from 'react'
import './IntroPage.css'
import {Grid, Row, Col} from 'react-bootstrap'
import functionbusicon from './functionbusicon.svg'
import functionmapicon from './functionmapicon.svg'
import functionticketicon from './functionticketicon.svg'
import {Link} from 'react-router'

export default class IntroPage extends React.Component {

    render() {
        return (

            <Grid>
                <Row className="Intro-icon">
                    <Col sm={4} className="Intro-col">
                        <ul className="Intro-icon">
                            <li><Link to={`/`}><img src={functionbusicon} className="Intro-img" alt="logo"/></Link></li>
                        </ul>
                    </Col>
                    <Col sm={4} className="Intro-col">
                        <ul className="Intro-icon">
                            <li><Link to={`/`}><img src={functionmapicon} className="Intro-img" alt="logo"/></Link></li>
                        </ul>
                    </Col>
                    <Col sm={4}  className="Intro-col">
                        <ul className="Intro-icon">
                            <li><Link to={`/`}><img src={functionticketicon} className="Intro-img" alt="logo"/></Link></li>
                        </ul>
                    </Col>
                </Row>


            </Grid>

        )
    }
}

