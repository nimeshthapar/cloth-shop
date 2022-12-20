import './cart-dropdown.styles.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import CartItem from '../cart-items/cart-item';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
	const navigate = useNavigate();
	const { cartItems } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
				{cartItems.length === 0 && (
					<h2 className="empty-message">Your Cart is Empty!</h2>
				)}
			</div>
			<Button
				classType={'default'}
				onClick={() => {
					navigate('/checkout');
				}}
			>
				CHECKOUT
			</Button>
		</div>
	);
};

export default CartDropdown;
