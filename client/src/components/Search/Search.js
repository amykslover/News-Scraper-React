import React, { Component } from "react";
import "./Search.css";

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			term: 'Cryptocurrency' ,
			datestart: '20160101',
			dateend: '20171231'
		};
	}

	handleFormSubmit = (event) => {
		console.log('Inside Form Submit')
		console.log(this.props);
    	event.preventDefault();
    	console.log(this.state)
    	this.props.updateSearch(this.state.term, this.state.datestart, this.state.dateend)
    	this.setState({ term: "", datestart: "", dateend: "" });
  	};

	//When a user hits the search button, the data they typed in should be 
	//passed into the runQuery function defined in the helpers
	render() {
		return (
		<div className="searchformdiv">
			<form >
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
				<div className="buttondiv">
			    <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      			</div>
      		</form>

		</div>
		);
	}
}

export default Search;