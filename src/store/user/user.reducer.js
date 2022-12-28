import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
	user: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return { ...state, user: payload };
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return { ...state, user: null };
		case USER_ACTION_TYPES.SIGN_IN_FAIL:
		case USER_ACTION_TYPES.SIGN_OUT_FAIL:
		case USER_ACTION_TYPES.SIGN_UP_FAIL:
			return { ...state, error: payload };
		default:
			return state;
	}
};
