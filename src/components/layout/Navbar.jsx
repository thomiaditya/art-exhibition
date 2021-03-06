import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<nav>
			<div className="container nav-wrapper">
				<div className="flexbox fb-space-between nav-items fb-vcenter">
					<div className="nav-left">
						<Link to="/">
							<span>artisan.</span>
						</Link>
					</div>
					<Link to="/">
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
					</Link>

					<div className="hamburger">
						<span></span>
						<span></span>
						<span></span>
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
