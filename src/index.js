import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import BusStops from './bus-stops/BusStops'
import BusLines from './bus-lines/BusLines'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/bus-stops" component={BusStops}/>
            <Route path="/bus-lines" component={BusLines}/>


        </Route>
    </Router>,
  document.getElementById('root')
);
