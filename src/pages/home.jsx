import React from "react";
import Content from "../components/home/Content";
import Header from "../components/home/Header";

import imgUrl from "../assets/lady-with-an-enim.jpg";
import signature from "../assets/leonardo-signature.png";

import salvaUrl from "../assets/the-last-supper.jpg";
import Discover from "../components/home/Discover";

const Home = () => {
	const header = {
		title: "Lady With An Enim",
		abstract:
			"Venenatis malesuada eget mattis eget orci, a neque. Aliquam lacus, sed sodales et mollis. Orci blandit quam vel faucibus. Luctus nunc id vulputate sed nam diam. Hendrerit amet hendrerit porttitor malesuada sed non vel, nunc. Fusce non dui id praesent faucibus ut amet nibh. Tortor fringilla pretium	ultricies elit pellentesque. Lacinia tempus pretium, fringilla egestas et. Cursus dui eleifend consectetur aliquet id orci, bibendum tincidunt augue. Id egestas nulla sagittis eget. Nunc orci pretium, ultricies fringilla risus lectus ridiculus. Morbi.",
		score: 86,
		artist: "Leonardo Da Vinci",
		place: "Italy, France",
		dateSubmit: "June 23 2021",
		user: "Thomi Aditya",
		imgUrl: imgUrl,
		signature: signature,
		month: "Oct",
		year: 2021,
	};

	const content = {
		title: "The Last Supper",
		abstract:
			"Venenatis malesuada eget mattis eget orci, a neque. Aliquam lacus, sed sodales et mollis. Orci blandit quam vel faucibus. Luctus nunc id vulputate sed nam diam. Hendrerit amet hendrerit porttitor malesuada sed non vel, nunc. Fusce non dui id praesent faucibus ut amet nibh. Tortor fringilla pretium	ultricies elit pellentesque. Lacinia tempus pretium, fringilla egestas et. Cursus dui eleifend consectetur aliquet id orci, bibendum tincidunt augue. Id egestas nulla sagittis eget. Nunc orci pretium, ultricies fringilla risus lectus ridiculus. Morbi.",
		score: 86,
		artist: "Leonardo Da Vinci",
		place: "Italy, France",
		dateSubmit: "June 23 2021",
		user: "Thomi Aditya",
		imgUrl: salvaUrl,
		month: "September",
		year: 2021,
	};

	return (
		<>
			<Header data={header} />
			<Content direction="right" data={content} />
			<Content direction="left" data={content} />
			<Content direction="right" data={content} />
			<Content direction="left" data={content} />
			<Discover />
		</>
	);
};

export default Home;
