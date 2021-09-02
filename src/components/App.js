import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

// Styles
import "../styles/app.scss";
import Layout from "./layout/Layout";

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					{routes.map((route, i) => (
						<Route exact {...route} key={i} />
					))}
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
