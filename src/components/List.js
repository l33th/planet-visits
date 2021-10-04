import React from "react";

const List = ({ planets }) => {
	return (
		<>
			{planets.map((planet) => {
				const { id, name, distance, description, image } = planet;
				return (
					<article key={id} className='planet'>
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<h5>{distance}</h5>
							<p>{description}</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
