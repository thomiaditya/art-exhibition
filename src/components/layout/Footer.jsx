import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="top flexbox fb-space-between">
					<div className="lf-nav">
						<h6>The awards for painting, book, and maybe other art soon.</h6>
						<ul className="nav-footer">
							<li>Inspirations</li>
							<li>Gallery</li>
							<li>Jobs</li>
							<li>About us</li>
							<li>Winners</li>
							<li>Nominees</li>
							<li>Articles</li>
						</ul>
						<ul className="socmed-footer">
							<span>Follow us</span>
							<li>Twitter</li>
							<li>Facebook</li>
							<li>Youtube</li>
							<li>Instagram</li>
						</ul>
					</div>

					<div className="rg-nav">
						You may want to contact us, feel free to use our{" "}
						<strong>
							<Link to="/">beautiful form!</Link>
						</strong>
					</div>
				</div>

				<div className="bottom flexbox fb-space-between">
					<div className="lf">
						<ul>
							<li>FAQ</li>
							<li>Help</li>
							<li>Privacy Policy</li>
							<li>About us</li>
							<li>Language</li>
						</ul>
					</div>

					<div className="rg">
						<span>Copyright &copy; by Artisan. 2021, Inc</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
