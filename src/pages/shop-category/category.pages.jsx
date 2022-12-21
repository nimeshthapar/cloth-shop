import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopCard from '../../components/shop/shop-cards';
import { CategoriesContext } from '../../store/categories-context';
import './category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const { categories } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categories[category]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);
	return (
		<>
			<h1 className="shop-category-title">{category.toUpperCase()}</h1>
			<div className="shop-category-container">
				{products &&
					products.map((product) => (
						<ShopCard key={product.id} {...product} />
					))}
			</div>
		</>
	);
};

export default Category;
