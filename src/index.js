import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import BusStops from './bus-stops/BusStops'
import BusStop from './bus-stop/BusStop'
import BusLines from './bus-lines/BusLines'
import BusDetails from './bus-details/BusDetails'
import Map from './map/Map'
import StopsMap from './stops-map/StopsMap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/bus-stops" component={BusStops}/>
            <Route path="/bus-stops/:busStopId" component={BusStop}/>
            <Route path="/bus-details/:busId" component={BusDetails}/>
            <Route path="/bus-lines" component={BusLines}/>
            <Route path="/map" component={Map}/>
            <Route path="/stops-map" component={StopsMap}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
