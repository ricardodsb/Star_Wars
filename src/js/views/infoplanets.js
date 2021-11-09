import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.scss";

export const InfoPlanets = () => {
	const params = useParams();
	const [planets, setPlanets] = useState(null);
	useEffect(() => {
		fetchInfo();
	}, []);

	const fetchInfo = async () => {
		const URL = "https://www.swapi.tech/api/" + params.endpoint + "/" + params.id;
		const CONFIG = {
			method: "GET",
			headers: {
				"Content-type": "application/json"
			}
		};
		const response = await fetch(URL, CONFIG);
		const json = await response.json();
		setPlanets(json.result.properties);
	};
	return (
		<div className="container section new">
			{planets != null ? (
				<div className="row">
					<div className="col-lg-6 col-12 details-content">
						<img
							src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							className="details-img"
						/>
					</div>
					<div className="col-lg-6 col-12 details-content">
						<h4 className="details-title mb-3">{planets.name}</h4>
						<div className="details-description">
							<p className="mb-3">
								<li>
									<strong> Diameter: </strong> {planets.diameter}
								</li>

								<li>
									<strong> Rotation Period: </strong> {planets.rotation_period}
								</li>

								<li>
									<strong> Orbital period: </strong> {planets.orbital_period}
								</li>

								<li>
									<strong> Gravity: </strong> {planets.gravity}
								</li>

								<li>
									<strong> Population: </strong> {planets.population}
								</li>

								<li>
									<strong> Climate: </strong> {planets.climate}
								</li>

								<li>
									<strong> Terrain: </strong> {planets.terrain}
								</li>
								<li>
									<strong> Surface Water: </strong> {planets.surface_water}
								</li>
							</p>
						</div>
					</div>
				</div>
			) : (
				"loading"
			)}
		</div>
	);
};
