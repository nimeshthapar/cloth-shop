import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
import { CategoriesContext } from '../../store/categories-context';

const Shop = () => {
	const { categories } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categories).map((title) => {
				const products = categories[title].slice(0, 4);
				return (
					<CategoryPreview
						key={title}
						products={products}
						title={title}
					/>
				);
			})}
		</>
	);
};

export default Shop;
