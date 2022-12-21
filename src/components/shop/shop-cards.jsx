import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import Button from '../button/button';
import { Footer, Name, Price, ShopCardContainer } from './shop-card.styles';
const ShopCard = ({ id, name, imageUrl, price }) => {
	const { addCartItem } = useContext(CartContext);
	const handleAddToCart = () => {
		addCartItem({ id, name, imageUrl, price });
	};
	return (
		<ShopCardContainer>
			<img alt={name} src={imageUrl} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button classType={'inverted'} onClick={handleAddToCart}>
				ADD TO CART
			</Button>
		</ShopCardContainer>
	);
};

export default ShopCard;
