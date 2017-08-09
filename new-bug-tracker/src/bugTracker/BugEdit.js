import React from 'react';

class BugEdit extends React.Component{
	onCreateClick(){
		let bugName = this.refs.txtBugName.value;
		this.props.addNew(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">New Bug :</label>
				<input type="text" ref="txtBugName"/>
				<input type="button" value="Create" onClick={this.onCreateClick.bind(this)}/>
			</section>
		);
	}
}
export default BugEdit;
