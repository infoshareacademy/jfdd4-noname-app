require('rc-slider/assets/index.css');

import {connect} from 'react-redux';
const React = require('react');
const Slider = require('rc-slider');

const wrapperStyle = { width: 400, margin: 50 };

const handleStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    padding: '2px',
    border: '2px solid #abe2fb',
    borderRadius: '3px',
    background: '#fff',
    fontSize: '14px',
    textAlign: 'center',
};

const CustomHandle = props => {
    const style = Object.assign({ left: `${props.offset}%` }, handleStyle);
    return (
        <div style={style}>{props.value.toFixed(2)}</div>
    );
};

const mapStateToProps = (state) => ({

});

CustomHandle.propTypes = {
    value: React.PropTypes.any,
    offset: React.PropTypes.number,
}

class SliderComponent extends React.Component {

    render() {

        return(
            <div>
                <div style={wrapperStyle}>
                    <p>Aktualna godzina</p>
                    <Slider
                        min={0}
                        max={24}
                        defaultValue={0}
                        handle={<CustomHandle />}
                        onAfterChange={function (xyz) { console.log(xyz)}}
                    />
                </div>
            </div>
            )

    }
}

export default connect(mapStateToProps)(SliderComponent)



