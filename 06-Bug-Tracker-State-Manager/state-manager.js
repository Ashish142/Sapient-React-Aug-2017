var SM = (function(){
	function createStore(reducer){

		var init_action = { type : '@@INIT_ACTION' };

		var _reducer = reducer;
		var _state = reducer(undefined, init_action);

		function getState(){
			return _state;
		}

		var _callbacks = [];
		function subscribe(callback){
			if (typeof callback === 'function')
				_callbacks.push(callback);
		}

		function trigger(){
			_callbacks.forEach(callback => callback());
		}

		function dispatch(action){
			var newState = _reducer(_state, action);
			if (newState !== _state){
				_state = newState;
				trigger();
			}
		}

		var store = {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
		return store;
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let actionCreator = actionCreators[key];
				let action = actionCreator.apply(null, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}	
})();
