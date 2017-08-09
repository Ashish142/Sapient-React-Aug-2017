import bug_action_types from '../actions/bug_action_types';

function bugsReduer(currentState = [], action){
	function descendingComparer(comparer){
		return function(item1, item2){
			return comparer(item1, item2) * -1;
		}
	}
	if (action.type === 'SERVER_DATA'){
		return action.payload;
	}
	if (action.type === bug_action_types.addNew){
		let newBug = action.payload;
		return [...currentState, newBug];
	}
	if(action.type === bug_action_types.toggle){
		let bugToToggle = action.payload;
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === bug_action_types.removeClosed){
		return currentState.filter(bug => !bug.isClosed);
	}
	if (action.type === bug_action_types.sort){
		
		let attrName = action.payload.by;

		let comparer = function(item1, item2){
			if (item1[attrName] > item2[attrName]) return 1;
			if (item1[attrName] < item2[attrName]) return -1;
			return 0;
		}
		if (action.payload.descending){
			comparer = descendingComparer(comparer);
		}
		currentState.sort(comparer);
		return [...currentState];
	}

	return currentState;
}
export default bugsReduer;