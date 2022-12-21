import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import CartItem from '../cart-items/cart-item';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
	const navigate = useNavigate();
	const { cartItems } = useContext(CartContext);

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
