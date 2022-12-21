import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocs } from '../util/firebase.util.js';

export const CategoriesContext = createContext({
	categories: {},
});

const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategoriesAndDocs = async () => {
			const categoryMap = await getCategoriesAndDocs();
			setCategories(categoryMap);
		};

		fetchCategoriesAndDocs();
	}, []);
	return (
		<CategoriesContext.Provider value={{ categories }}>
			{children}
		</CategoriesContext.Provider>
	);
};

export default CategoriesProvider;
