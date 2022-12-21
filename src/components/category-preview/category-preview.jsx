import React from 'react';
import {
	CategoryPreviewContainer,
	Preview,
	Title,
} from './category-preview.styles';
import ShopCard from '../shop/shop-cards';
const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products.map(({ id, imageUrl, price, name }) => (
					<ShopCard
						key={id}
						id={id}
						name={name}
						price={price}
						imageUrl={imageUrl}
					/>
				))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
