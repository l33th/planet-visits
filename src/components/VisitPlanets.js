import React from "react";
import List from "./List";

const VisitPlanets = () => {
	return (
		<div>
			<main>
				<section className='container'>
					<h3>0 planets today</h3>
					<List />
					<button className='btn'>clear</button>
				</section>
			</main>
		</div>
	);
};

export default VisitPlanets;
