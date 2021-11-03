import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPlanets();
	}, []);
	return (
		<div className="container-fluid content-row">
			<div className="title">
				<h1>Planets</h1>
			</div>
			<div className="cards-wrapper">
				{store.planetsList.map((item, index) => {
					return (
						<div className="row col-auto" style={{ margin: "10px", width: "15 rem" }} key={index}>
							<div className="card bg-dark">
								<img
									src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
									className="characters card-img-top mx-auto"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-warning">{item.name}</h5>
									<p className="card-text"> Click below to see the planet info </p>
									<a href="#" className="btn btn-primary float-start">
										Learn more
									</a>
									{store.favorites.includes(item.name) ? null : (
										<button
											className="btn btn-outline-warning float-end"
											onClick={() => actions.setFavorites(item.name)}>
											<i className="fas fa-heart" />
										</button>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
