import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="flexbox v-space-between nav-items">
				<div className="hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="submission-link">
					<Link>
						<span>Submit your masterpiece!</span>
						<svg
							width="49"
							height="15"
							viewBox="0 0 49 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 7.69697H48M48 7.69697L40.32 14M48 7.69697L40.32 1"
								stroke="black"
								stroke-width="1.5"
								stroke-linejoin="round"
							/>
						</svg>
					</Link>
				</div>
			</div>

			<div className="logo">
				<Link to="/">
					<h1 className="logo-text">Artisan.</h1>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
