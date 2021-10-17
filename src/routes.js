import Home from "./pages/home";
import Gallery from "./pages/gallery";

export const routes = [
	{
		path: "/",
		render: Home,
	},
	{
		path: "/gallery",
		render: Gallery,
	},
];
