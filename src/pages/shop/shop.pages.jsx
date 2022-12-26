import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview';

const Shop = () => {
	const categories = useSelector((state) => state.categories.categoryMap);
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
