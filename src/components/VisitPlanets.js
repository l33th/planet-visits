import React, { useState } from "react";
import List from "./List";
import data from "../data";

const VisitPlanets = () => {
    const [planets, setPlanets] = useState(data);
    const clearAll = () => setPlanets([]);

	return (
		<div>
			<main>
				<section className='container'>
					<h3>{planets.length} planets to visit</h3>
					<List planets={planets} />
					<button className='btn' onClick={clearAll}>
						clear all
					</button>
				</section>
			</main>
		</div>
	);
};

export default VisitPlanets;
