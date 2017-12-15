import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input //This is now a controlled compenent where the value changes
				 value={this.state.term}
				 onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default SearchBar;