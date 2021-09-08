import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className="flexbox v-center">
					<div className="logo">
						<Link to="/">ARTIST</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
