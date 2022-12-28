import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
//import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter(Boolean);

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	undefined,
	compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
