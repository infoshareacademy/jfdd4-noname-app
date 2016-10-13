import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import BusStops from './bus-stops/BusStops'
import BusStop from './bus-stops/BusStops'
import BusLines from './bus-lines/BusLines'
import Map from './map/Map'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/bus-stops" component={BusStops}/>
            <Route path="/bus-stops/:busStopId" component={BusStop}/>
            <Route path="/bus-lines" component={BusLines}/>
            <Route path="/map" component={Map}/>


        </Route>
    </Router>,
  document.getElementById('root')
);
