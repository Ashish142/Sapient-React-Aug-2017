import React from 'react';

let BugItem = ({bug, toggle}) => {
		let bugClass = bug.isClosed ? 'bugname closed' : 'bugname';
		return (
			<li>
				<span className={bugClass} onClick={() => toggle(bug)}> {bug.name}</span>
				<div className="datetime">{bug.createdAt.toString()}</div>
				<i>{bug.isClosed.toString()}</i>
			</li>
		)
}
export default BugItem;