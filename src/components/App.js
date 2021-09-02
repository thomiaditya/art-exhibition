import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

// Styles
import "../styles/app.scss";

function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<Route exact {...route} key={i} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
