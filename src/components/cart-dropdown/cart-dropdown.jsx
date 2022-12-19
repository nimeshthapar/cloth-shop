import './cart-dropdown.styles.scss';
import Button from '../button/button';
const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container ">
			<div className="cart-items" />
			<Button classType={'default'}>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
