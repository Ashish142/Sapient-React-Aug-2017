import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import bugsReducer from './bugTracker/reducers/bugsReducer';
import spinnerReducer from './spinner/reducers/spinnerReducer';


var rootReducer = combineReducers({
	bugs_data : bugsReducer,
	spinner_data : spinnerReducer
});

let store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>, 
	document.getElementById('root'));

