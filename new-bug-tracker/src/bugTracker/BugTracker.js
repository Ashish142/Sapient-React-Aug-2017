import React, { Component } from 'react';
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
		bugs : state.bugs_data
	}
}

function mapDispatchToProps(dispatch){
	return {
		load : function(){
			fetch('http://localhost:3030/bugs')
				.then(response => response.json())
				.then(bugs => dispatch({
					type : 'SERVER_DATA',
					payload : bugs
				}))
		},
		addNew : function(bugName){
			let newBugData = {
				name : bugName,
				id : 0,
				isClosed : false,
				createdAt : new Date()
			};
			fetch('http://localhost:3030/bugs',{
				method : 'POST',
				body : JSON.stringify(newBugData),
				headers : {
					'content-type' : 'application/json'
				}
			})
			.then(response => response.json())
			.then(newBugObject => dispatch({
				type : 'ADD_NEW',
				payload : newBugObject
			}));

		}
	}
}

class BugTracker extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggleBug, addNew, removeClosed, sort } = this.props;
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
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);



