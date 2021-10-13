import React from "react";

const Qualified = () => {
	return (
		<section className="qualified">
			<div className="container">
				<div className="ctn-box">
					<h2>
						You have another <i>masterpiece</i> that yours? Lets see{" "}
						<i>you are qualified</i> for submit!
					</h2>
					<p>
						We have some sort of standard of art we want to make sure the
						quality of art presented to audience.
					</p>
					<div className="btn-readmore">
						<span>Read more about this</span>
						<svg
							width="80"
							height="9"
							viewBox="0 0 80 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 4.60606H79M79 4.60606L74.52 8M79 4.60606L74.52 1"
								stroke="black"
								stroke-width="1.5"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualified;
