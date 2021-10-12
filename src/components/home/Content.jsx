import React from "react";

const Content = ({ direction, data }) => {
	const {
		score,
		title,
		abstract,
		imgUrl,
		artist,
		place,
		dateSubmit,
		user,
		month,
		year,
	} = data;

	return (
		<article className="bp-last">
			<div className="container">
				<div className={`bp-last-wrapper ${direction}`}>
					<div className={`bp-last-grid ${direction}`}>
						<div
							className={`ct-img ${direction}`}
							style={{ backgroundImage: `url(${imgUrl})` }}
						>
							<span className="score">{score}</span>
							<span className="share">Share</span>
						</div>

						<div className={`ct-meta ${direction}`}>
							<h6>
								{month} {year}
							</h6>
							<h1>{title}</h1>
							<div className={`ct-desc flexbox ${direction}`}>
								<p className="ct-abst">{abstract}</p>
								<ul className="ct-md">
									<li>{place}</li>
									<li>Submited on {dateSubmit}</li>
									<li>by {user}</li>
								</ul>
							</div>

							<h2 className="artist-bt">{artist}</h2>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Content;
