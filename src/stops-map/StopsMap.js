import React from 'react'
import {connect} from 'react-redux'
import Map from '../map/Map'

const mapStateToProps = state => ({
    stops: state.stopsData.stops,
    buses: state.busesData.buses,
    hourValue: state.sliderData.hourValue
});


const StopsMap = ({


    stops,
    buses,
    hourValue,
    activeStops = stops.map(s => s.id === 1),
    sprawdzGodzinaSie = buses.map(function (xyz) {
        // console.log(xyz.routes, '//////////////////')
        return xyz.routes
    }).map(function (abc) {
        abc.map(function (qwerty) {
            var tablicaPomnozonaGodziny = [];
            tablicaPomnozonaGodziny.push(parseInt(qwerty.slice(0, 2)) * 60);
            console.log(tablicaPomnozonaGodziny, "------------------------")
        })
    })
}) => (

    <div>
        <div style={{width: '100%', height: '500px'}}>
            <Map center={[54.352325, 18.671786]} points={activeStops}/>
        </div>
        <p>Mamy godzinę: {new Date(hourValue).getHours() + ':' + new Date(hourValue).getMinutes()} </p>
        <p>

            {new Date(hourValue).toUTCString()}

            {/*{console.log(stops, "**********************")}*/}
            {/*{console.log(buses, "oooooooooooooooooooooo")}*/}
            {console.log(sprawdzGodzinaSie)}
        </p>
    </div>
);

export default connect(mapStateToProps)(StopsMap)

