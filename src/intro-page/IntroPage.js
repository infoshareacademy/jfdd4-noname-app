import React from 'react'
import './IntroPage.css'
import {Grid, Row, Col} from 'react-bootstrap'
import functionbusicon from './functionbusicon.svg'
import functionmapicon from './functionmapicon.svg'
import busstop from './busstop.svg'
import {Link} from 'react-router'

export default class IntroPage extends React.Component {

    render() {
        return (
            <div>
                <Col sm={12} className="Intro-col">
                    <h2> Zaplanuj optymalnie swoją podróż!
                    </h2>
                </Col>
                <Col sm={4} className="Intro-col">
                    <div className="Intro-icon"><Link to={`/`}><img src={functionbusicon} className="Intro-img"
                                                                    alt="bus"/></Link>
                        <div>Linie autobusowe</div>
                    </div>
                </Col>
                <Col sm={4} className="Intro-col">
                    <div className="Intro-icon"><Link to={`/`}><img src={functionmapicon} className="Intro-img"
                                                                    alt="map"/></Link>
                        <div>Mapa przystanków</div>
                    </div>
                </Col>
                <Col sm={4} className="Intro-col">
                    <div className="Intro-icon"><Link to={`/`}><img src={busstop} className="Intro-img"
                                                                    alt="busstop"/></Link>
                        <div>Lista przystanków</div>
                    </div>

                </Col>


            </div>

        )
    }
}

