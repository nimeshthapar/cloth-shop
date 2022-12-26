import { CATEGORIES_ACTION_TYPES } from './categories.types';

const INITIAL_STATE = {
	categoryMap: {},
	isLoading: false,
	error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
			return { ...state, isLoading: false, error: payload };
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return { ...state, categoryMap: payload, isLoading: false };
		default:
			return state;
	}
};
