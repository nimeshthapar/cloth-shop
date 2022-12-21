import { CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({ item }) => {
	const { name, quantity, imageUrl, price } = item;
	return (
		<CartItemContainer>
			<img alt={name} src={imageUrl} />
			<ItemDetails>
				<Name>{name}</Name>
				<span className="price">
					{quantity} x ₹{price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
