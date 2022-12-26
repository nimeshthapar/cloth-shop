import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../store/cart/cart.actions';
import Button from '../button/button';
import { Footer, Name, Price, ShopCardContainer } from './shop-card.styles';

const ShopCard = ({ id, name, imageUrl, price }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const handleAddToCart = () =>
		dispatch(addCartItem(cartItems, { id, name, imageUrl, price }));

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
