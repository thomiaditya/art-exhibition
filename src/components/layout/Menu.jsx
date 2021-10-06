import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	const menu = [
		{
			name: "Showcase",
			route: "/",
		},
		{
			name: "Event",
			route: "/event",
		},
		{
			name: "Gallery",
			route: "/gallery",
		},
		{
			name: "About",
			route: "/about",
		},
		{
			name: "Login",
			route: "/login",
		},
	];

	return (
		<>
			{menu.map((item, i) => {
				return (
					<Link to={item.route} key={i}>
						<li className="nav-item">{item.name}</li>
					</Link>
				);
			})}
		</>
	);
};

export default Menu;
