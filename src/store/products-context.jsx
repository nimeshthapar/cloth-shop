import { createContext, useState } from 'react';
import SHOP_DATA from '../pages/shop/shop-data.json';

export const ProductContext = createContext({
	products: [],
});

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(SHOP_DATA);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
