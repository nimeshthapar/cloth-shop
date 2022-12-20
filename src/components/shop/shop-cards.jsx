import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import Button from '../button/button';
import './shop-card.styles.scss';
const ShopCard = ({ id, name, imageUrl, price }) => {
	const { addCartItem } = useContext(CartContext);
	const handleAddToCart = () => {
		addCartItem({ id, name, imageUrl, price });
	};
	return (
		<div className="shop-card-container ">
			<img alt={name} src={imageUrl} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button classType={'inverted'} onClick={handleAddToCart}>
				ADD TO CART
			</Button>
		</div>
	);
};

export default ShopCard;
