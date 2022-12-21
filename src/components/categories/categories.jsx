import { CategoriesContainer } from './categories.styles.jsx';
import categories from './categories-data';

import CategoriesDetail from './categories-item';

const Categories = () => (
	<CategoriesContainer>
		{categories.map(({ id, name, src }) => (
			<CategoriesDetail id={id} name={name} src={src} key={id} />
		))}
	</CategoriesContainer>
);

export default Categories;
