import React from "react";
import salvaUrl from "../../assets/the-last-supper.jpg";

const Content = ({ direction }) => {
	const abstract =
		"Eu posuere lorem dui, gravida. Elementum tempor lacinia faucibus varius sed facilisis ut non cras. Vulputate habitant hendrerit mus nisl viverra cursus. Auctor at vitae, fermentum risus metus nunc nulla quis at. At tristique vulputate lorem senectus adipiscing. Lectus sit mi et id amet nam. Scelerisque metus mauris amet lobortis nunc amet. Libero tellus praesent ut vitae volutpat, maecenas fames. Ullamcorper non cras vivamus risus malesuada eu elementum id feugiat. Sociis adipiscing egestas fringilla sagittis pharetra eget ut. Risus, pretium eget pharetra mauris elementum. Felis urna ut hac cras a eu quis quis.";

	return (
		<article className="bp-last">
			<div className="container">
				<div className={`bp-last-wrapper ${direction}`}>
					<div className={`bp-last-grid ${direction}`}>
						<div
							className={`ct-img ${direction}`}
							style={{ backgroundImage: `url(${salvaUrl})` }}
						>
							<span className="score">70</span>
							<span className="share">Share</span>
						</div>

						<div className={`ct-meta ${direction}`}>
							<h6>September 2021</h6>
							<h1>The Moon</h1>
							<div className={`ct-desc flexbox ${direction}`}>
								<p className="ct-abst">{abstract}</p>
								<ul className="ct-md">
									<li>Italy, France</li>
									<li>Submited on June 23 2021</li>
									<li>by Anonymous</li>
								</ul>
							</div>

							<h2 className="artist-bt">Leonardo Da Vinci</h2>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Content;
