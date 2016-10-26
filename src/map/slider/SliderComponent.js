require('rc-slider/assets/index.css');
import { registerHour } from './actionCreators'
import {connect} from 'react-redux';
const React = require('react');
const Slider = require('rc-slider');

const mapStateToProps = (state) => ({
    hourValue: state.sliderData
});

const mapDispatchToProps = (dispatch) => ({
    onChangeValue: (value) => dispatch(registerHour(value))
});

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

CustomHandle.propTypes = {
    value: React.PropTypes.any,
    offset: React.PropTypes.number,
}

class SliderComponent extends React.Component {

    render() {

        var {
            hourValue,
            onChangeValue
        } = this.props

        return(
            <div>
                <div style={wrapperStyle}>
                    <h1>Mamy godzinę: {hourValue}</h1>
                    <p>Aktualna godzina</p>
                    <Slider
                        min={0}
                        max={24}
                        defaultValue={0}
                        handle={<CustomHandle />}
                        onAfterChange={() => onChangeValue()}
                    />
                </div>
            </div>
            )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderComponent)



