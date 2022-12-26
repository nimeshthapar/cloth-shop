import { useDispatch, useSelector } from 'react-redux';
import {
	addCartItem,
	clearCartItem,
	removeCartItem,
} from '../../store/cart/cart.actions';
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
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const handleRemove = () => dispatch(clearCartItem(cartItems, item));
	const handleIncrease = () => dispatch(addCartItem(cartItems, item));
	const handleDecrease = () => dispatch(removeCartItem(cartItems, item));
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
