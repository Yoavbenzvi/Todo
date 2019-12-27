import React from 'react';
import Task from './Task';

const TaskList = (props) => {
	const renderedList = props.itemsArray.map((task, i) => <Task task={task} key={task+i} index={i} removeItem={props.removeItem} />)

	return(
		<div className="ui raised segment">
			<h3>To Do</h3>
			{renderedList}
		</div>
	)
}

export default TaskList;