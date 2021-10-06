import React from "react";
import imgUrl from "../../assets/lady-with-an-enim.jpg";
import signature from "../../assets/leonardo-signature.png";

const Header = () => {
	const score = 86;
	const title = "Lady With An Enim";
	const abstract =
		"Venenatis malesuada eget mattis eget orci, a neque. Aliquam lacus, sed sodales et mollis. Orci blandit quam vel faucibus. Luctus nunc id vulputate sed nam diam. Hendrerit amet hendrerit porttitor malesuada sed non vel, nunc. Fusce non dui id praesent faucibus ut amet nibh. Tortor fringilla pretium	ultricies elit pellentesque. Lacinia tempus pretium, fringilla egestas et. Cursus dui eleifend consectetur aliquet id orci, bibendum tincidunt augue. Id egestas nulla sagittis eget. Nunc orci pretium, ultricies fringilla risus lectus ridiculus. Morbi.";

	const artist = "Leonardo Da Vinci";
	const [artistFn, artistLn] = splitName(artist);

	function splitName(name) {
		const splitted = name.split(" ");
		return [splitted[0], splitted.slice(1)];
	}

	return (
		<section className="header">
			<div className="container bp-wrapper">
				<div className="bp-box">
					<div className="lf-img" style={{ backgroundImage: `url(${imgUrl})` }}>
						<span className="score">{score}</span>
						<span className="share">Share</span>
					</div>
					<div className="rg-meta">
						<div className="bp-subject">
							<h6>The Best Painting of The Month</h6>
							<h1>{title}</h1>
							<div className="p-desc">
								<p className="p-abst">{abstract}</p>
								<ul className="p-md">
									<li>Italy, France</li>
									<li>Submited on June 23 2021</li>
									<li>by Anonymous</li>
								</ul>
							</div>

							<div className="p-bot flexbox">
								<div className="author">
									<h2>
										{artistFn}
										<span>{artistLn}</span>
									</h2>
									<img className="signature" src={signature} alt={artist} />
								</div>
								<span className="line"></span>
								<h2 className="month">
									<span>Oct</span>2021
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
