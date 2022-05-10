import { ADD_TO_LIKED_ITEMS, DELETE_FROM_LIKED_ITEMS } from "./actions";
const initialLikedItems = {
    likedItems: []
}

function likedItemsReducer(state = initialLikedItems, action) {
    switch (action.type) {
        case ADD_TO_LIKED_ITEMS:
            return { ...state.likedItems, likedItems: [...state.likedItems, action.payload] };
        case DELETE_FROM_LIKED_ITEMS:
            return { ...state.likedItems, likedItems: state.likedItems.filter((item) => item.cardTitle !== action.payload.cardTitle) }
        default:
            return state;
    }
}

export default likedItemsReducer;