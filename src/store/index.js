import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers/index';

const storeWithMiddleware = applyMiddleware(promise)(createStore);

export default function createAppStore(defaultState){
    return storeWithMiddleware(reducer,defaultState);
}

