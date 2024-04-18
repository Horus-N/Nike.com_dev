import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductToCart: (state, action) => {
            state.push(action.payload);
            return state;
        },
        deleteProductInCart: (state, action) => {
            state = state.filter(product => product.id !== action.payload);
            return state;
        },
        storeCart: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})


export default cartSlice;
export const actionsCart = cartSlice.actions;
export const reducerCart = cartSlice.reducer;