import { createStore } from 'redux';
import {config} from './actions';
import reducer from './reducer';
let store = createStore(reducer,config);

export default store