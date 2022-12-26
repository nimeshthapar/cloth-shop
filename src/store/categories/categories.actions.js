import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategories = (categoryMap) => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
	payload: categoryMap,
});
