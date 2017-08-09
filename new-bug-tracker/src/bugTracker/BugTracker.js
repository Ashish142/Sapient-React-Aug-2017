import React from 'react';

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
export default BugTracker;