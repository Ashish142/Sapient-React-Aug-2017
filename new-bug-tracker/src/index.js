import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import App from './App';
import registerServiceWorker from './registerServiceWorker';
*/
import { createStore, bindActionCreators } from 'redux';

import { Provider } from 'react-redux';

import bugsReducer from './bugTracker/reducers/bugsReducer';


import BugTracker from './bugTracker/BugTracker';

let store = createStore(bugsReducer);



ReactDOM.render(
	<Provider store={store}>
		<BugTracker></BugTracker>
	</Provider>, 
	document.getElementById('root'));

