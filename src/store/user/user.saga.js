import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
	createUserDocHandler,
	createUserWithEmailHandler,
	getCurrentUser,
	signInWithEmailAndPasswordHandler,
	signInWithGooglePopup,
	signOutUser,
} from '../../util/firebase.util';
import {
	signInFail,
	signInSuccess,
	signOutFail,
	signOutSuccess,
	signUpFail,
	signUpSuccess,
} from './user.actions';
import { USER_ACTION_TYPES } from './user.types';

export function* getUserSnapshots(user, config = {}) {
	try {
		const userSnapshot = yield call(createUserDocHandler, user, config);
		yield put(
			signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (err) {
		yield put(signInFail(err));
	}
}

export function* isAuthenticated() {
	try {
		const user = yield call(getCurrentUser);
		if (!user) return;
		yield call(getUserSnapshots, user);
	} catch (err) {
		yield put(signInFail(err));
	}
}

export function* onCheckUserSessions() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER, isAuthenticated);
}

export function* signInWithGoogle() {
	try {
		const { user } = yield signInWithGooglePopup();
		yield call(getUserSnapshots, user);
	} catch (err) {
		put(signInFail(err));
	}
}

export function* onGoogleSignIn() {
	yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield call(
			signInWithEmailAndPasswordHandler,
			email,
			password
		);
		yield call(getUserSnapshots, user);
	} catch (err) {
		put(signInFail(err));
	}
}

export function* onEmailSignIn() {
	yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield call(
			createUserWithEmailHandler,
			email,
			password
		);
		yield put(signUpSuccess(user, { displayName }));
	} catch (err) {
		put(signUpFail(err));
	}
}

export function* onSignUp() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, config } }) {
	console.log('run');
	yield call(getUserSnapshots, user, config);
}

export function* onSignUSuccess() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signOut() {
	try {
		yield call(signOutUser);
		yield put(signOutSuccess());
	} catch (err) {
		put(signOutFail(err));
	}
}

export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSessions),
		call(onGoogleSignIn),
		call(onEmailSignIn),
		call(onSignUp),
		call(onSignUSuccess),
		call(onSignOutStart),
	]);
}
