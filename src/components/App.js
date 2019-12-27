import React from 'react';
import AddButton from './AddButton';
import TaskList from './TaskList';

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			itemsArray: []
		}
	}

	addItem = (item) => {
		const items = this.state.itemsArray.concat(item)

		this.setState({
			itemsArray: items
		})
	}

	removeItem = (i) => {
		const removed = this.state.itemsArray.filter((item, index) => index !== i)

		this.setState({
			itemsArray: removed
		})
	}

	render() {
		return(
			<div className="ui segment">
				<h1>My List</h1>
				<AddButton addItem={this.addItem}/>
				<TaskList itemsArray={this.state.itemsArray} removeItem={this.removeItem} />
			</div>
		)
	}
}

export default App;