import {createStore, combineReducers} from 'redux';

import {reducer as data} from './data';
import {reducer as preferences} from './preferences';

export default createStore(
	combineReducers({data, preferences}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);