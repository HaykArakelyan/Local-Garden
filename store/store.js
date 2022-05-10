import { configureStore, combineReducers } from "@reduxjs/toolkit";
import numberOfCartItems from "./reducers";
import cartItem from "./cartReducer";
import likedItems from "./likedItemsReducer";

const reducer = combineReducers({
    numberOfCartItems,
    cartItem,
    likedItems,
});

export const Store = configureStore({ reducer })
