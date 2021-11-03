import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Cards } from "../component/cards";
import { Planets } from "../views/planets";
import { Vehicles } from "../views/vehicles";

export const Home = () => (
	<div className="page-container">
		<Cards />
		<Planets />
		<Vehicles />
	</div>
);
