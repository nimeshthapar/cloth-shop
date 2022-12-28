import { getCategoriesAndDocs } from '../../util/firebase.util';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategories = (categoryMap) => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
	payload: categoryMap,
});

export const fetchCategoriesStart = () => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	payload: categories,
});

export const fetchCategoriesFail = (error) => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,
	payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoryMap = await getCategoriesAndDocs();
		dispatch(fetchCategoriesSuccess(categoryMap));
	} catch (err) {
		dispatch(fetchCategoriesFail(err.message));
	}
};
