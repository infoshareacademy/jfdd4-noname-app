import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import sliderReducer from './map/slider/reducer'
import stopsReducer from './bus-stops/reducer'
import busesReducer from './bus-lines/reducer'

let reducer = combineReducers({
    busesData: busesReducer,
    stopsData: stopsReducer,
    sliderData: sliderReducer
});

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        ),
        persistState(['sliderData'])
    )
);

store.subscribe(() => {
    localStorage.setItem('favoriteStopsIds', JSON.stringify(store.getState().stopsData.favoriteStopsIds || []))
})

export default store