import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Characters } from "../views/characters";
import { Planets } from "../views/planets";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const clickMenu = e => {
		setState(!state);
	};
	const [state, setState] = useState(false);

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

			<div className="dropdown col-4 d-grid gap-2 d-md-flex justify-content-md-end">
				<div className="dropdown">
					<a className="nav-link dropdown-toggle" onClick={clickMenu}>
						{`Favorites ${store.favorites.length}`}
					</a>
					<div className={`dropdown-menu ${state ? "show" : ""}`}>
						{store.favorites.length > 0 ? (
							store.favorites.map((item, index) => (
								<div key={index} className="dropdown-item d-flex" style={{ width: "12em" }}>
									{item}
									<button className="btn btn-danger">
										<i
											className="fa fa-times"
											onClick={() =>
												actions.removeFav(
													store.favorites[index].category,
													store.favorites[index].id
												)
											}
										/>
									</button>
								</div>
							))
						) : (
							<div className="text-center" />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
