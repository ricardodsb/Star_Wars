import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Characters } from "../views/characters";
import { Planets } from "../views/planets";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar row d-flex col-13 bg-dark">
			<div className="navbar-brand col-4">
				<Link to="/">
					<img
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						className="d-grid gap-2 d-md-flex justify-content-md-start"
						alt="..."
						style={{ width: "73px", marginLeft: "30px" }}
					/>
				</Link>
			</div>

			<div
				className="dropdown col-4 d-grid gap-2 d-md-flex justify-content-md-end"
				style={{ marginRight: "30px" }}>
				<button
					className="btn btn-primary dropdown-toggle justify-content-md-end"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					title={`Favorites ${store.favorites.length}`}>
					{store.favorites.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
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
