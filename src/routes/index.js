import { routerConfig } from '~/configs';
import { OnlyHeaderLayout } from '~/layouts';
import Search from '~/layouts/Search';
import {
    HomePage, ProductPage, LoginPage,
    SignupPage, DetailProductPage,
    CartPage
} from '~/pages';

export const publicRoutes = [
    {
        path: routerConfig.login,
        component: LoginPage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.signup,
        component: SignupPage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.home,
        component: HomePage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.productAll,
        component: ProductPage,
    },
    {
        path: routerConfig.productByType,
        component: ProductPage,
    },
    {
        path: routerConfig.productByTypeAndGender,
        component: ProductPage,
    },
    {
        path: routerConfig.productByTypeAndGenderAndSuitableFor,
        component: ProductPage,
    }
    ,
    {
        path: routerConfig.shopByBrand,
        component: ProductPage,
    },
    {
        path: routerConfig.shopByBrandAndGender,
        component: ProductPage,
    },
    {
        path: routerConfig.shopbyGender,
        component: ProductPage,
    },
    {
        path: routerConfig.detail,
        component: DetailProductPage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.cart,
        component: CartPage,
        layout: OnlyHeaderLayout
    },
    {
        path: '/search',
        component: Search,
        layout: OnlyHeaderLayout
    }
];

export const privateRoutes = [];