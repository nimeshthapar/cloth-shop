import { USER_ACTION_TYPES } from './user.types';

export const setUser = (user) => ({
	type: USER_ACTION_TYPES.SET_USER,
	payload: user,
});

export const checkUser = () => ({ type: USER_ACTION_TYPES.CHECK_USER });

export const googleSignInStart = () => ({
	type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (email, password) => ({
	type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	payload: { email, password },
});

export const signInSuccess = (user) => ({
	type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFail = (error) => ({
	type: USER_ACTION_TYPES.SIGN_IN_FAIL,
	payload: error,
});

export const signUpFail = (error) => ({
	type: USER_ACTION_TYPES.SIGN_UP_FAIL,
	payload: error,
});

export const signUpStart = (email, password, displayName) => ({
	type: USER_ACTION_TYPES.SIGN_UP_START,
	payload: { email, password, displayName },
});

export const signUpSuccess = (user, config) => ({
	type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
	payload: { user, config },
});

export const signOutFail = (error) => ({
	type: USER_ACTION_TYPES.SIGN_OUT_FAIL,
	payload: error,
});

export const signOutStart = () => ({
	type: USER_ACTION_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
});
