const configs = {
    router: {
        home: '/',
        signup: '/signup',
        login: '/login',
        cart: '/cart',
        productAll: '/products',
        detail: '/product/detail/:id',
        productByType: '/products/:type',
        productByTypeAndGender: '/products/:type/:gender',
        productByTypeAndGenderAndSuitableFor: '/products/:type/:gender/:suitable',
        shopByBrand: '/shopbybrand/:brand',
        shopByBrandAndGender: '/shopbybrand/:brand/:gender',
        shopbyGender: '/shopbygender/:gender',
    }
}


export const routerConfig = configs.router;