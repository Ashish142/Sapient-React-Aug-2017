import bug_action_types from './bug_action_types';

let bugActionsCreators = {
	addNew : function(bugName){
		let newBugAction = {
			type : bug_action_types.addNew,
			payload : bugName
		};
		return newBugAction;
	},
	toggleBug : function(bug){
		let toggleBugAction = {
			type : bug_action_types.toggle,
			payload : bug
		};
		return toggleBugAction;
	},
	removeClosed : function(){
		let removeClosedAction = {
			type : bug_action_types.removeClosed
		};
		return removeClosedAction
	},
	sort : function(attrName, isDescending){
		let sortBugAction = {
			type : bug_action_types.sort,
			payload : { by : attrName, descending : isDescending }
		};
		return sortBugAction;
	}

};
export default bugActionsCreators;