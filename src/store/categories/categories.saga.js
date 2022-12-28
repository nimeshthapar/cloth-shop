import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocs } from '../../util/firebase.util';
import {
	fetchCategoriesFail,
	fetchCategoriesSuccess,
} from './categories.actions';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
	try {
		const categoryMap = yield call(getCategoriesAndDocs);
		yield put(fetchCategoriesSuccess(categoryMap));
	} catch (err) {
		yield put(fetchCategoriesFail(err.message));
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
