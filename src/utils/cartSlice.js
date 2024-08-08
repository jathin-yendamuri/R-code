import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initial state with default items
    },
    reducers: {
        // Reducer to add an item to the cart
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // Reducer to remove the last item from the cart
        removeItem: (state) => {
            if (state.items.length > 0) {
                state.items.pop();
            }
        },
        // Reducer to clear all items from the cart
        clearCart: (state) => {
            state.items.length = 0; // Clear the array explicitly
        }
    }
});

// Exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Exporting reducer
export default cartSlice.reducer;