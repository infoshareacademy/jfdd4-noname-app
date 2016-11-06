import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import stopsReducer from './bus-stops/reducer'
import busesReducer from './bus-lines/reducer'
import favoritesReducer from './favorites/reducer'
import loginReducer from './log-in/reducer'
import persistState from 'redux-localstorage'


let reducer = combineReducers({
    busesData: busesReducer,
    stopsData: stopsReducer,
    favorites: favoritesReducer,
    login: loginReducer

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
        persistState ([])
    )
);

// store.subscribe(() => {
//     localStorage.setItem('favoriteStopsIds', JSON.stringify(store.getState().stopsData.favoriteStopsIds || []));
//
//     localStorage.setItem('favoriteBusesIds', JSON.stringify(store.getState().busesData.favoriteBusesIds || []))
// })

export default store