import { configureStore } from '@reduxjs/toolkit'
import { reducerFillter } from '~/layouts/Filter/FillterSlice';
import { reducerProduct } from '~/pages/ProductPage/ProductPageSlice';
import { reducerAuth } from './authSlice';
import { reducerCart } from '../pages/CartPage/cartSlice';
import { reducerFavourite } from '~/pages/FavouritePage/favouriteSlice';

const store = configureStore({
    reducer: {
        fillter: reducerFillter,
        productList: reducerProduct,
        auth: reducerAuth,
        cart: reducerCart,
        favourites: reducerFavourite
    }
})

export default store;