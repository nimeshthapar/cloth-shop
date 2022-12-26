import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles';
import Button from '../button/button';
import CartItem from '../cart-items/cart-item';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CartDropdown = () => {
	const navigate = useNavigate();
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<CartDropDownContainer>
			<CartItems>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
				{cartItems.length === 0 && (
					<EmptyMessage className="empty-message">
						Your Cart is Empty!
					</EmptyMessage>
				)}
			</CartItems>
			<Button
				classType={'default'}
				onClick={() => {
					navigate('/checkout');
				}}
			>
				CHECKOUT
			</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
