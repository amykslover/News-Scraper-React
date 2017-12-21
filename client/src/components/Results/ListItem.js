import React, { Component } from "react";
import "./ListItem.css";

import helpers from "../../utils/helpers";



class ListItem extends Component {
	

	handleClick = () => {
	console.log(helpers)
	helpers.postSaved(this.props.headline, this.props.pub_date, this.props.url)
		
	}

render() {
	let {index, headline, url, pub_date} = this.props
	return (
		<li key={index} className="list-group-item"> 
			<div className="article-list"> 
				<div className="article-list-left"> 
					<button onClick= {this.handleClick} className="btn btn-primary">Save Article</button>
					<br></br>
					<a rel="noreferrer noopener" target="_blank" href={url}>Visit Article</a>
				</div>

				<div className="article-list-main"> 
					<div className="article-detail"> 
						<h4>{headline}</h4>
						<p>{pub_date}</p>
					</div>
				</div>
			</div>

		</li>

	);
	}
};

export default ListItem;