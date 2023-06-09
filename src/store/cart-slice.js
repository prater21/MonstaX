import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        // add item to cart
        addItem(state, action) {
            state.totalPrice += parseInt(action.payload.item.price * action.payload.item.quantity);
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.title === action.payload.item.title
            );
            if (existingCartItemIndex !== -1) {
                const existingCartItem = state.items[existingCartItemIndex];
                existingCartItem.quantity += action.payload.item.quantity
            }
            else {
                state.items = [...state.items, action.payload.item];
            }
        },

        //delete item from cart
        deleteItem(state, action) {
            const title = action.payload.title;
            const updatedItems = state.items.find(item => item.title === title);
            state.totalPrice -= updatedItems.price * updatedItems.quantity;
            state.items = state.items.filter(item => item.title !== title);;
        },

        // add item quantity by 1
        addQuantity(state, action) {
            const title = action.payload.title;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.title === title
            );

            const existingCartItem = state.items[existingCartItemIndex];
            existingCartItem.quantity++;
            state.totalPrice += existingCartItem.price;

        },

        // sub item quantity by 1
        subQuantity(state, action) {
            const title = action.payload.title;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.title === title
            );

            const existingCartItem = state.items[existingCartItemIndex];
            if (existingCartItem.quantity !== 1) {
                existingCartItem.quantity--;
                state.totalPrice -= existingCartItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})


export default store;