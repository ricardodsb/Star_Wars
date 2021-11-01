import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPeople();
	}, []);
	return (
		<div className="container-fluid content-row" style={{ paddingTop: "10px" }}>
			<div className="title">
				<h1>Characters</h1>
			</div>
			<div className="cards-wrapper">
				{store.peopleList.map((item, index) => {
					return (
						<div className="row col-auto" style={{ margin: "10px", width: "15 rem" }} key={index}>
							<div className="card bg-dark">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">May the force be with you </p>
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
