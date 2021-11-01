import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Cards } from "../component/cards";
import { Planets } from "../views/planets";

export const Home = () => (
	<div className="page-container">
		<Cards />
		<Planets />
	</div>
);
