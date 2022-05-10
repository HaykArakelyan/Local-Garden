import { ADD_TO_CART, DELETE_FROM_CART } from "./actions";
const initialCart = {
    cart: []
}

function cartItemReducer(state = initialCart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state.cart, cart: [...state.cart, action.payload] };
        case DELETE_FROM_CART:
            return { ...state.cart, cart: state.cart.filter((item) => item.cardTitle !== action.payload.cardTitle) }
        default:
            return state;
    }
}
export default cartItemReducer;