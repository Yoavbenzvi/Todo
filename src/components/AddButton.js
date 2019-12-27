import React from 'react';

class AddButton extends React.Component {
	state = {
		input: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.state.input.length > 0) {
			this.props.addItem(this.state.input)

			this.setState({
				input:''
			})
		}
	}

	handleChange = (event) => {
		this.setState({
			input: event.target.value
		})
	}


	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit} >
					<input 
						className="ui huge input" 
						value={this.state.input} 
						onChange={this.handleChange}
						placeholder="add a new task"
					/>
					<br />
					<button className="ui button">Add</button>
				</form>
			</div>
		)
	}
}

export default AddButton;