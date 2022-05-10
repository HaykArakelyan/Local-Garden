export const INCREASE_ITEMS_COUNT = "INCREASE_ITEMS_COUNT";
export const DECREASE_ITEMS_COUNT = "DECREASE_ITEMS_COUNT";


export const increaseCount = () => {
    return {
        type: INCREASE_ITEMS_COUNT,
    }
}

export const decreaseCount = () => {
    return {
        type: DECREASE_ITEMS_COUNT,
    }
}


export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}


export const ADD_TO_LIKED_ITEMS = "ADD_TO_LIKED_ITEMS";
export const DELETE_FROM_LIKED_ITEMS = "DELETE_FROM_LIKED_ITEMS";

export const addToLikedItems = (item) => {
    return {
        type: ADD_TO_LIKED_ITEMS,
        payload: item
    }
}

export const deleteFromLikedItems = (item) => {
    return {
        type: DELETE_FROM_LIKED_ITEMS,
        payload: item
    }
}