import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/planets";
import { Characters } from "./views/characters";
import { Info } from "./views/info";
import { InfoPlanets } from "./views/infoplanets";
import { InfoVehicles } from "./views/infovehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/info/:endpoint/:id">
							<Info />
						</Route>
						<Route exact path="/infoplanets/:endpoint/:id">
							<InfoPlanets />
						</Route>
						<Route exact path="/infovehicles/:endpoint/:id">
							<InfoVehicles />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
