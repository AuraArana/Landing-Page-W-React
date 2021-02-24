import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div className="d-flex" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active d-flex"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a className="nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
