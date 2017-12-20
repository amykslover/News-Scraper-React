import React, { Component } from "react";
import "./Search.css";

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
    	console.log(this.state)
    	this.setState({ term: "", datestart: "", dateend: "" });
  	};

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  }

	render() {
		return (
		<div className="searchformdiv">
			<form  onSubmit={this.handleFormSubmit}>
				<div className="form-group">
					<label htmlFor="searchterm">Search Term</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchterminput"
					 placeholder="Enter Search Term"
					 name="term"
					 value={this.state.term}
					 onChange={event => this.setState({ term: event.target.value })} />
				</div>

				<div className="form-group">
					<label htmlFor="searchterm">Date From</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchdatestartinput"
					 placeholder="YYYYMMDD"
					 name="datestart"
					 value={this.state.datestart}
					 onChange={event => this.setState({ datestart: event.target.value })} />
				</div>

				<div className="form-group">
					<label htmlFor="searchend">Date Through</label>
					<input
					 type="text"
					 className="form-control"
					 id="searchdateendinput"
					 placeholder="YYYYMMDD"
					 name="dateend"
					 value={this.state.dateend}
					 onChange={event => this.setState({ dateend: event.target.value })} />
				</div>
			    <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      		</form>

		</div>
		);
	}
}

export default Search;