import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShopCard from '../../components/shop/shop-cards';
import './category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const categories = useSelector((state) => state.categories.categoryMap);
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
