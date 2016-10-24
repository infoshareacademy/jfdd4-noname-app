import React from 'react'
import './IntroPage.css'
import {Col} from 'react-bootstrap'
import functionbusicon from './functionbusicon.svg'
import functionmapicon from './functionmapicon.svg'
import busstop from './busstop.svg'
import {Link} from 'react-router'

export default class IntroPage extends React.Component {

    render() {
        return (
            <div>
                <Col sm={12} className="Intro-col ">

                    <h2> Zaplanuj optymalnie swoją podróż!
                    </h2>
                </Col>
                <Col sm={4} className="Intro-col">
                    <Link to={`/bus-lines`}><div className="Intro-icon"><img src={functionbusicon} className="Intro-img"
                                                                    alt="bus"/>
                        <div>Linie autobusowe</div>
                    </div></Link>
                </Col>
                <Col sm={4} className="Intro-col">
                    <Link to={`/map`}><div className="Intro-icon"><img src={functionmapicon} className="Intro-img"
                                                                    alt="map"/>
                        <div>Mapa przystanków</div>
                    </div></Link>
                </Col>
                <Col sm={4} className="Intro-col">
            <Link to={`/bus-stops`}><div className="Intro-icon"><img src={busstop} className="Intro-img"
                                                                    alt="busstop"/>
                        <div>Lista przystanków</div>
                    </div></Link>

                </Col>


            </div>

        )
    }
}

