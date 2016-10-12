import React from 'react';
import data from '../data/data.js';

export default class BusDetails extends React.Component {

    constructor () {
    super ();

        this.state = {
            stops: []
        }
    }

    componentWillMount () {
        this.setState ({
            stops: data.stops
        })
    }

    render () {

        return (
            <div>
                 <p>Szczegóły linia - 139</p>
                 <p>Kier.: Oliwa | PKP Przymorze SKM - Kołobrzeska - <strong>Dąbrowszczaków</strong> - Jagiellońska
                     - Chłopska - Bora-Komorowskiego - Droszyńskiego - Oliwa PKP </p>
                <p>Kier.: Przymorze SKM | Oliwa PKP - Bora-Komorowskiego - Chłopska - Jagiellońska
                    - Dąbrowszczaków - Obrońców Wybrzeża - Chłopska - Kołobrzeska - Przymorze SKM</p>

                <p>Kierunek: <strong>Oliwa</strong></p>
                <p>Przystanki</p>
                <ul>
                    <li>Przystanek1</li>
                    <li>Przystanek2</li>
                    <li><strong>Dąbrowszczaków - click for details</strong></li>
                    <li>Przystanek...</li>
                </ul>

            </div>
        );

    }
}

