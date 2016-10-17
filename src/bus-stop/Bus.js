import React from 'react'
import './Bus.css';

export default class Bus extends React.Component {
    render() {
             return (
            <div className="bus-icon">
                {this.props.children}
            </div>
        );
    }

}