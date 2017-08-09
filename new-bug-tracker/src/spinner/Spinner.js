import React, { Component } from 'react';
import spinner_action_creators from './actions/spinner_action_creators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
	return {
		value : state.spinner_data
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(spinner_action_creators, dispatch);
}
class Spinner extends Component{
	onIncrementClick(){
		this.props.increment();
	}
	onDecrementClick(){
		this.props.decrement();
	}
	render(){
		let value = this.props.value;
		return(
			<div>
				<input type="button" value="DECREMENT" onClick={this.onDecrementClick.bind(this)}/>
				<div className="value">{value}</div>
				<input type="button" value="INCREMENT" onClick={this.onIncrementClick.bind(this)}/>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Spinner);	