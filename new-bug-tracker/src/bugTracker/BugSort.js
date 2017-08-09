import React from 'react';


class BugSort extends React.Component{
	onSortChange(){
		this.props.sort(this.refs.sortBy.value, this.refs.byDescending.checked)
	}
	render(){
		return (
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select onChange={this.onSortChange.bind(this)} ref="sortBy">
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" onClick={this.onSortChange.bind(this)} ref="byDescending" />
			</section>
		)
	}
}

export default BugSort;