import {reducers} from '../reducers';
import {createStore} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

export default createStore(reducers, devToolsEnhancer({ realtime: true }));