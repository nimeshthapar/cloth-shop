import {
	CartIconContainer,
	CartSvgComponent,
	ItemCount,
} from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../../store/cart/cart.actions';

const CartIcon = () => {
	const cartCount = useSelector((state) => state.cart.cartCount);
	const dispatch = useDispatch();
	const handleShow = () => dispatch(setShowCart());

	return (
		<CartIconContainer onClick={handleShow}>
			<CartSvgComponent />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
