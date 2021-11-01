import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Cards = props => {
	return (
		<div className="col-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card {props.characters.name}</h5>
					<p className="card-text">jkdhgkjadgjkadgkj </p>
					<a href="#" className="btn btn-primary">
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	characters: PropTypes.object,
	key: PropTypes.number
};

export default Cards;
