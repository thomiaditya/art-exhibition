import React from "react";
// import imgUrl from "../../assets/lady-with-an-enim.jpg";
// import signature from "../../assets/leonardo-signature.png";

const Header = ({ data }) => {
	const {
		score,
		title,
		abstract,
		imgUrl,
		signature,
		artist,
		place,
		dateSubmit,
		user,
		month,
		year,
	} = data;

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
									<li>{place}</li>
									<li>Submited on {dateSubmit}</li>
									<li>by {user}</li>
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
									<span>{month}</span>
									{year}
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
