import React from "react";
import "./ListItem.css";

export const ListItem = props => {
	return (
		<li className="list-group-item"> 
			<div className="article-list"> 
				<div className="article-list-left"> 
					<button className="btn btn-success">Save Article</button>
				</div>
				<div className="article-list-main"> 
					<div className="article-detail"> 
						<h3>{props.headline}</h3>
						<a rel="noreferrer noopener" target="_blank" href={props.url}>Visit Article</a>
						<p>{props.pub_date}</p>
						<p>{props.summary}</p>
					</div>
				</div>
			</div>

		</li>

	);

};
