import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg"
					className="col-1"
					alt="..."
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li>
						<a className="dropdown-item" href="#" />
					</li>
					<li>
						<a className="dropdown-item" href="#" />
					</li>
					<li>
						<a className="dropdown-item" href="#" />
					</li>
				</ul>
			</div>
		</nav>
	);
};
