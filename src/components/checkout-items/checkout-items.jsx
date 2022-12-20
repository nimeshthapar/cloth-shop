import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, onAdd }) => {
	const { name, imageUrl, price, quantity } = item;
	const { addCartItem, removeCartItem, clearCartItem } =
		useContext(CartContext);

	const handleRemove = () => clearCartItem(item);
	const handleIncrease = () => addCartItem(item);
	const handleDecrease = () => removeCartItem(item);
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img alt={name} src={imageUrl} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span className="arrow" onClick={handleDecrease}>
					&#8249;
				</span>
				<span className="value">{quantity}</span>
				<span className="arrow" onClick={handleIncrease}>
					&#8250;
				</span>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={handleRemove}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
