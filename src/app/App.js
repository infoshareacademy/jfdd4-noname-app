import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-intro">
         <Link to={`/bus-stops`}>Lista przystanków</Link> {''}
         <Link to={`/bus-lines`}>Lista autobusów</Link>
        </div>
          <div className="App-change">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
