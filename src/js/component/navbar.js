import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar row d-flex justify-content-center col-12 bg-light">
			<div className="col-4">
				<Link to="/">
					<img
						src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg"
						className="d-grid gap-2 d-md-flex justify-content-md-start"
						alt="..."
						style={{ width: "55px", marginLeft: "30px" }}
					/>
				</Link>
			</div>
			<div className="dropdown col-4 d-grid gap-2 d-md-flex justify-content-md-end">
				<button
					className="btn btn-primary dropdown-toggle justify-content-md-end"
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
