import { useContext } from 'react';
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { CartContext } from '../../store/cart-context';

const CartIcon = () => {
	const { setShowCart, cartCount } = useContext(CartContext);

	return (
		<div
			className="cart-icon-container"
			onClick={() => {
				setShowCart((p) => !p);
			}}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
