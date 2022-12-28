import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview';
import Spinner from '../../components/spinner/spinner';

const Shop = () => {
	const { categoryMap: categories, isLoading } = useSelector(
		(state) => state.categories
	);

	return isLoading ? (
		<Spinner />
	) : (
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
