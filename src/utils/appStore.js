import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice.js";


const appStore = configureStore(
    {
        reducer:{
            cart:cartReducer,
        },
    }
);

export default appStore;