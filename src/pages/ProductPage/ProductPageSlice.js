import { createSlice } from '@reduxjs/toolkit';

const productPageSlice = createSlice({
    initialState: [
    ],
    name: 'productList',
    reducers: {
        store: (state, action) => {
            action.payload?.forEach((product) => {
                state.push(product);
            })
            return state;
        },
        clearStore: () => {
            return [];
        }
    }
})

export default productPageSlice;
export const actionProduct = productPageSlice.actions;
export const reducerProduct = productPageSlice.reducer;