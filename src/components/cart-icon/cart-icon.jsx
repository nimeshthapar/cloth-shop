import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">5</span>
		</div>
	);
};

export default CartIcon;
