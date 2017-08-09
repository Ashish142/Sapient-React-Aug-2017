import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import App from './App';
import registerServiceWorker from './registerServiceWorker';
*/
import { createStore, bindActionCreators } from 'redux';

import bugsReducer from './bugTracker/reducers/bugsReducer';
import bugActionCreators from './bugTracker/actions/bug_action_creators';

import BugTracker from './bugTracker/BugTracker';

let store = createStore(bugsReducer);
let bugActions = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
	let bugs = store.getState();
	ReactDOM.render(
		<BugTracker 
			bugs={bugs} 
			{...bugActions}
		>
		</BugTracker>, 
		document.getElementById('root'));
};
renderApp();
store.subscribe(renderApp);
