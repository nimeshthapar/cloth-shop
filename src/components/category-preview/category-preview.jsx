import React from 'react';
import './category-preview.styles.scss';
import ShopCard from '../shop/shop-cards';
import { Link } from 'react-router-dom';
const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<Link to={title} className="title">
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className="preview">
				{products.map(({ id, imageUrl, price, name }) => (
					<ShopCard
						key={id}
						id={id}
						name={name}
						price={price}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryPreview;
