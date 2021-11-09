import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.scss";

export const InfoVehicles = () => {
	const params = useParams();
	const [vehicles, setVehicles] = useState(null);
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
		setVehicles(json.result.properties);
	};
	return (
		<div className="container section new">
			{vehicles != null ? (
				<div className="row">
					<div className="col-lg-6 col-12 details-content">
						<img
							src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
							className="details-img"
						/>
					</div>
					<div className="col-lg-6 col-12 details-content">
						<h4 className="details-title mb-3">{vehicles.name}</h4>
						<div className="details-description">
							<p className="mb-3">
								<li>
									<strong> Model: </strong> {vehicles.model}
								</li>

								<li>
									<strong> Vehicle Class: </strong> {vehicles.vehicle_class}
								</li>

								<li>
									<strong> Manufacturer: </strong> {vehicles.manufacturer}
								</li>

								<li>
									<strong> Cost in credits: </strong> {vehicles.cost_in_credits}
								</li>

								<li>
									<strong> Length: </strong> {vehicles.length}
								</li>

								<li>
									<strong> Crew: </strong> {vehicles.crew}
								</li>

								<li>
									<strong> Passengers: </strong> {vehicles.passengers}
								</li>
								<li>
									<strong> Max atmosphering speed: </strong> {vehicles.max_atmosphering_speed}
								</li>
								<li>
									<strong> Cargo capacity: </strong> {vehicles.cargo_capacity}
								</li>
								<li>
									<strong> Consumables: </strong> {vehicles.consumables}
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
