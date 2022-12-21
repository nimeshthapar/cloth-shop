import { useNavigate } from 'react-router-dom';
import {
	CategoryContainer,
	CategoryBodyContainer,
	BackgroundImage,
} from './categories.styles';

const CategoriesDetail = ({ name, src }) => {
	const navigate = useNavigate();
	const handleCategoryNavigation = () => {
		navigate(`/shop/${name.toLowerCase()}`);
	};
	return (
		<CategoryContainer onClick={handleCategoryNavigation}>
			<BackgroundImage src={src} />
			<CategoryBodyContainer>
				<h2>{name}</h2>
				<p>Shop Now</p>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
};

export default CategoriesDetail;
