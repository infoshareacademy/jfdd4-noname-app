import React from 'react'
import stopMarker from './bus-stop-marker.svg'
import { Link } from 'react-router'
import IncomingBuses from '../../incoming-buses/IncomingBuses'
import {connect} from 'react-redux'


var MARKER_SIZE = 40;
const markerStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE,
    transition: 'all .2s ease-in-out',
    transformOrigin: 'center bottom'
};
// const labelStyle = {
//     display: 'none'
// };

const mapStateToProps = state => ({
    stops: state.stopsData.stops,
    buses: state.busesData.buses,
    hourValue: state.sliderData.hourValue
});

const getMarkerStyle=(props)=>({
    ...markerStyle,
    transform: `scale(${props.$hover ? 1.4 : 1})`
});

const getLabelStyle=(props)=>({
    display: props.$hover ? 'block' : 'none',
    position: 'absolute',
    width: 300,
    marginLeft: -100,
    color: 'darkred',
    textAlign: 'center',
    textDecoration: 'none',
    border: '3px solid darkred',
    background: 'whitesmoke',
    borderRadius: 7,
    zIndex: 99
})

export default (props) =>
<div>
    <Link to={props.to}>
        <div style={getMarkerStyle(props)}>
            <img src={stopMarker} alt="bus-stop-selected"/>
        </div>
        <a style={getLabelStyle(props)} className="stopLabel">{props.children}
        </a>
    </Link>
</div>


