import React from "react";

const Discover = () => {
	return (
		<section className="discover">
			<div className="container">
				<div className="flexbox fb-space-between">
					<div className="lf-content">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
							similique ipsum earum minus adipisci,saepe provident. Minus
							voluptatibus minima cum id, quidem nulla ipsum veritatis! Et
							ducimus quasi mollitia fugiat.
						</p>
						<div className="discover-btn">
							<span>Discover more</span>
							<svg
								width="29"
								height="9"
								viewBox="0 0 29 9"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 4.60606H28M28 4.60606L23.52 8M28 4.60606L23.52 1"
									stroke="black"
									stroke-width="1.5"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="line"></div>
				</div>
			</div>
		</section>
	);
};

export default Discover;
