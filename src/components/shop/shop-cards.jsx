import React from 'react';
import Button from '../button/button';
import './shop-card.styles.scss';
const ShopCard = ({ name, imageUrl, price }) => {
	return (
		<div className="shop-card-container ">
			<img alt={name} src={imageUrl} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button classType={'inverted'}>ADD TO CART</Button>
		</div>
	);
};

export default ShopCard;
