import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
			console.log(windowWidth);
		});
	}, []);

	return (
		<nav>
			<div className="container nav-wrapper">
				<div className="flexbox fb-space-between nav-items">
					<div className="nav-left">
						<Link to="/">
							<span>Artisan.</span>
						</Link>
					</div>

					<div className="nav-right">
						<span>Submit your masterpiece</span>
						<svg
							width="29"
							height="9"
							viewBox="0 0 29 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 4.60606H28M28 4.60606L23.52 8M28 4.60606L23.52 1"
								stroke="black"
								stroke-width="1.5"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div className="nav-center">
					<ul className="nav-list">
						<Menu />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
