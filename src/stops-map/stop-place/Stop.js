import React from 'react'
import stopMarker from './bus-stop-marker.svg'

const MARKER_SIZE = 40;
const markerStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE
}

export default (props) =>
    <div style={markerStyle}><img src={stopMarker} alt="bus-stop"/></div>