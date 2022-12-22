import { useContext } from 'react';
import {
	CartIconContainer,
	CartSvgComponent,
	ItemCount,
} from './cart-icon.styles';

import { CartContext } from '../../store/cart-context';

const CartIcon = () => {
	const { setShowCart, cartCount } = useContext(CartContext);

	const handleShow = () => {
		setShowCart();
	};

	return (
		<CartIconContainer onClick={handleShow}>
			<CartSvgComponent />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
