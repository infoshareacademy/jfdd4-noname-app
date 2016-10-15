import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import BusStops from './bus-stops/BusStops'
import BusLines from './bus-lines/BusLines'
import BusDetails from './bus-details/BusDetails'

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/bus-stops" component={BusStops}/>
            <Route path="/bus-lines" component={BusLines}/>
            <Route path="/bus-details/:busId" component={BusDetails}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
