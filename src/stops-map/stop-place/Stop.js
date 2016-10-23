import React from 'react'
import stopMarker from './bus-stop-marker.svg'

var MARKER_SIZE = 40;
const markerStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE,
    transition: 'all .2s ease-in-out',
    'transform-origin': 'center bottom'
};
// const labelStyle = {
//     display: 'none'
// };


const getMarkerStyle=(props)=>({
    ...markerStyle,
    transform: `scale(${props.$hover ? 1.4 : 1})`
});

const getLabelStyle=(props)=>({
    display: props.$hover ? 'block' : 'none',
    position: 'absolute',
    width: 200,
    marginLeft: -100,
    textAlign: 'center',
    border: '3px solid darkred',
    background: 'whitesmoke',
    borderRadius: 7,
    zIndex: 99
})


export default (props) =>
    <div>
        <div style={getMarkerStyle(props)}>
            <img src={stopMarker} alt="bus-stop"/>
        </div>
        <div style={getLabelStyle(props)} className="stopLabel">{props.children}</div>
    </div>