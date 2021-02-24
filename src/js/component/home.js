import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="container mb-5">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
