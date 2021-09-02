import React from "react";

const Layout = ({ children }) => {
	return (
		<>
			<nav>Navigation Bar</nav>
			{children}
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
