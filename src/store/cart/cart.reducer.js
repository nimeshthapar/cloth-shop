import { CART_REDUCERS_TYPES } from './cart.types';

const INITIAL_STATE = {
	cartItems: [],
	showCart: false,
	cartCount: 0,
	cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	console.log(payload);
	switch (type) {
		case CART_REDUCERS_TYPES.UPDATE_CART:
			return {
				...state,
				cartItems: payload.cartItems,
				cartCount: state.cartCount + payload.count,
				cartTotal: state.cartTotal + payload.price,
			};
		case CART_REDUCERS_TYPES.SET_SHOW_CART:
			return { ...state, showCart: !state.showCart };
		default:
			return state;
	}
};
