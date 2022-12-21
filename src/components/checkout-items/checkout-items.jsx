import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;
	const { addCartItem, removeCartItem, clearCartItem } =
		useContext(CartContext);

	const handleRemove = () => clearCartItem(item);
	const handleIncrease = () => addCartItem(item);
	const handleDecrease = () => removeCartItem(item);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img alt={name} src={imageUrl} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={handleDecrease}>&#8249;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={handleIncrease}>&#8250;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
