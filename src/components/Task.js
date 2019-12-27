import React from 'react';
import '../CSS/Task.css'

class Task extends React.Component {
	state = {
		strike: ''
	}

	changeClass = () => {
		this.state.strike === '' ? this.setState({ strike: 'strike'}) : this.setState({ strike: '' })
	}

	render() {
		return(
			<div>
				<div
					className={"large-text " + this.state.strike}
					onClick={this.changeClass}
				>
					{this.props.task}
				</div>
				<div>
					<button 
						onClick={() => this.props.removeItem(this.props.index)}
					>
					<i class="trash alternate outline icon"></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Task;