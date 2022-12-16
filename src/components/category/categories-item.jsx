import React from 'react';

const CategoriesDetail = ({ name, id, src }) => {
	return (
		<li className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${src})` }}
			/>
			<div className="category-body-container">
				<h2>{name}</h2>
				<p>Shop Now</p>
			</div>
		</li>
	);
};

export default CategoriesDetail;
