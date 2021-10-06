import React from "react";
import Content from "../components/home/Content";
import Header from "../components/home/Header";

const Home = () => {
	return (
		<>
			<Header />
			<Content direction="right" />
			<Content direction="left" />
			<Content direction="right" />
			<Content direction="left" />
		</>
	);
};

export default Home;
