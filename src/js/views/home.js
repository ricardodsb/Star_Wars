import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="row">
			<h3>Characters </h3>
			<div className="card col-3">
				<img className="card-img-top" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title"> Luke Skywalker </h5>
					<p className="card-text" />
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
