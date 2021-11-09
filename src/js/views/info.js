import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.scss";

export const Info = () => {
	const params = useParams();
	const [people, setPeople] = useState(null);
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
		setPeople(json.result.properties);
	};
	return (
		<div className="container section new">
			{people != null ? (
				<div className="row">
					<div className="col-lg-6 col-12 details-content">
						<img
							src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?fit=2048%2C1365&ssl=1"
							className="details-img"
						/>
					</div>
					<div className="col-lg-6 col-12 details-content">
						<h4 className="details-title mb-3">{people.name}</h4>
						<div className="details-description">
							<p className="mb-3">
								<li>
									<strong> Height: </strong> {people.height}
								</li>

								<li>
									<strong> Mass: </strong> {people.mass}
								</li>

								<li>
									<strong> Hair color: </strong> {people.hair_color}
								</li>

								<li>
									<strong> Skin Color: </strong> {people.skin_color}
								</li>

								<li>
									<strong> Eye Color: </strong> {people.eye_color}
								</li>

								<li>
									<strong> Birth Year: </strong> {people.birth_year}
								</li>

								<li>
									<strong> Gender: </strong> {people.gender}
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
