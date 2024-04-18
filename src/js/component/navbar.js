import React from "react";
import { Link } from "react-router-dom";
import swImage from "../../img/star-wars.jpeg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://vectordiary.com/wp-content/uploads/2021/03/star-wars-logo-font.jpg" alt="Bootstrap" width="70" height="40"></img>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
			</div>
			</div>
		</nav>
	);
};
