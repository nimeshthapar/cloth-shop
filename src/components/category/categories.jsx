import './categories.styles.scss';
import categories from './categories-data';

import CategoriesDetail from './categories-item';

const Categories = () => (
	<ul className="categories-container">
		{categories.map(({ id, name, src }) => (
			<CategoriesDetail id={id} name={name} src={src} key={id} />
		))}
	</ul>
);

export default Categories;
