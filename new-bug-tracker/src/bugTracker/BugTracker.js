import React from 'react';
import BugStats from './BugStats';
import BugSort from './BugSort';
import BugItem from './BugItem';
import BugEdit from './BugEdit';

import './BugTracker.css';
import bugActionCreators from './actions/bug_action_creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//

function mapStateToProps(state){
	return {
		bugs : state
	}
}

function mapDispatchToProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;	
}

let BugTracker = ({ bugs, toggleBug, addNew, removeClosed, sort }) => {
	let bugItems = bugs.map((bug,idx) => (
		<BugItem key={idx} bug={bug} toggle={toggleBug} ></BugItem>) );
	return(
		<div>
			<BugStats bugs={bugs}></BugStats>
			<BugSort sort={sort}></BugSort>
			<BugEdit addNew={addNew}></BugEdit>
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={removeClosed}/>
			</section>
		</div>
	)
}
export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);



