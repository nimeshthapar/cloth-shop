import { useContext } from 'react';
import ShopCard from '../../components/shop/shop-cards';
import { ProductContext } from '../../store/products-context';
import './shop.styles.scss';

const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className="shop-container">
			{products.map(({ id, imageUrl, name, price }) => (
				<ShopCard
					key={id}
					id={id}
					name={name}
					imageUrl={imageUrl}
					price={price}
				/>
			))}
		</div>
	);
};

export default Shop;
