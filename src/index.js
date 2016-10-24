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
import IntroPage from './intro-page/IntroPage'

import store from './store';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {fetchStops} from './bus-stops/actionCreators'
import {fetchBuses} from './bus-lines/actionCreators'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={() => {
                store.dispatch(fetchStops());
                store.dispatch(fetchBuses())
            }}>
                <IndexRoute component={IntroPage} onEnter={() => store.dispatch(fetchStops())}/>
                <Route path="/bus-stops" component={BusStops}/>
                <Route path="/bus-stops/:busStopId" component={BusStop}/>
                <Route path="/bus-details/:busId" component={BusDetails}/>
                <Route path="/bus-lines" component={BusLines}/>
                <Route path="/map" component={StopsMap}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
