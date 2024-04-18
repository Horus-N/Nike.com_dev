import { createSlice } from '@reduxjs/toolkit';


const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: [],
    reducers: {
        storeFavorites: (state, action) => {
            state = action.payload;
            return state;
        },
        addFavourite: (state, action) => {
            state.push(action.payload);
            return state;
        },
        cancelFavourite: (state, action) => {
            state = state.filter((item) => item.id === action.payload);
            return state;
        }
    }
})


export default favouriteSlice;
export const actionsFavourite = favouriteSlice.actions;
export const reducerFavourite = favouriteSlice.reducer;