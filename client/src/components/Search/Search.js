import React, { Component } from "react";

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			term: '' ,
			datestart: '',
			dateend: ''
		};
	}

	handleFormSubmit = event => {
    	event.preventDefault();
    	this.setState({ term: "", datestart: "", dateend: "" });
  	};

	render() {
		return (
		<div className="searchformdiv">
			<form>
				<div className="form-group">
					<label htmlFor="searchterm">Search Term</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchterminput"
					 placeholder="Enter Search Term"
					 name="searchterm"
					 value={this.state.term}
					 onChange={event => this.setState({ term: event.target.value })} />
					 Value of the input: {this.state.term}
				</div>

				<div className="form-group">
					<label htmlFor="searchterm">Date From</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchdatestartinput"
					 placeholder="YYYYMMDD"
					 name="startdate"
					 value={this.state.datestart}
					 onChange={event => this.setState({ datestart: event.target.value })} />
					 Value of the input: {this.state.datestart}
				</div>

				<div className="form-group">
					<label htmlFor="searchend">Date Through</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchdateendinput"
					 placeholder="YYYYMMDD"
					 name="enddate"
					 value={this.state.dateend}
					 onChange={event => this.setState({ dateend: event.target.value })} />
					 Value of the input: {this.state.dateend}
				</div>
			    <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      		</form>

		</div>
		);
	}
}

export default Search;