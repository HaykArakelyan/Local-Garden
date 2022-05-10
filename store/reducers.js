import { INCREASE_ITEMS_COUNT, DECREASE_ITEMS_COUNT } from "./actions";
const initialState = {
    count: 0
}

function numberOfCartItemsReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_ITEMS_COUNT:
            return { ...state, count: state.count + 1 }
        case DECREASE_ITEMS_COUNT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default numberOfCartItemsReducer;