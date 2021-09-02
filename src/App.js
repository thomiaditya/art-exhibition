import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home.page";

const routes = [
	{
		path: "/",
		component: Home,
	},
];

function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<Route exact path={route.path} render={route.component} key={i} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
