import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPeople();
	}, []);
	return (
		<div className="container-fluid content-row">
			<div className="title">
				<h1>Characters</h1>
			</div>
			<div className="cards-content">
				{store.peopleList.map((item, index) => {
					return (
						<div className="row col-auto" style={{ margin: "10px", width: "15 rem" }} key={index}>
							<div className="card bg-dark">
								<img
									src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?fit=2048%2C1365&ssl=1"
									className="characters card-img-top mx-auto"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-warning">{item.name}</h5>
									<p className="card-text"> Click below to see the character info</p>
									<a href="#" className="btn btn-primary float-start">
										<Link to={"/info/people/" + item.uid}>
											<span className="text-warning ">Learn More</span>
										</Link>
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
