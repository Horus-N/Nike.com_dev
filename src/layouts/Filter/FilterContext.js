
import { createContext } from 'react';

export const TypesProduct = createContext([
    {
        title: 'Shoes',
        url: '/shoes'
    },
    {
        title: 'Clothing',
        url: '/clothing'
    },
    {
        title: 'Accessories-Equipment',
        url: '/Accessories-Equipment'
    }
])

export const TypesSuitable = createContext([
    {
        title: 'All',
        url: '/'
    },
    {
        title: 'Lifestyle',
        url: '/Lifestyle'
    },
    {
        title: 'Running',
        url: '/Running'
    },
    {
        title: 'Basketball',
        url: '/Basketball'
    },
    {
        title: 'Football',
        url: '/Football'
    },
    {
        title: 'Training & Gym',
        url: '/Training & Gym'
    },
    {
        title: 'Skateboarding',
        url: '/Skateboarding'
    },
    {
        title: 'Baseball',
        url: '/Baseball'
    },
    {
        title: 'Golf',
        url: '/Golf'
    },
    {
        title: 'Tennis',
        url: '/Tennis'
    },
    {
        title: 'Athletics',
        url: '/Athletics'
    },
    {
        title: 'Walking',
        url: '/Walking'
    }

])

export const TypesClothing = createContext([
    {
        title: 'All',
        url: '/clothing'
    },
    {
        title: 'Tops & T-Shirts',
        url: '/clothing/Tops & T-Shirts'
    },
    {
        title: 'Hoodies & Sweatshirts',
        url: '/clothing/Hoodies & Sweatshirts'
    },
    {
        title: 'Jackets',
        url: '/clothing/Jackets'
    },
    {
        title: 'Trousers & T-Shirts',
        url: '/clothing/Trousers & T-Shirts'
    },
    {
        title: 'Tracksuits',
        url: '/clothing/Tracksuits'
    },
    {
        title: 'Shorts',
        url: '/clothing/Shorts'
    },
    {
        title: 'Shocks',
        url: '/clothing/Shocks'
    }
])
export const typesClothingOfMen = [
    {
        title: 'Commpressiion & Baselayer',
        url: '/clothing/Commpression & Baselayer'
    },
]
export const typesClothingOfWoment = [
    {
        title: 'Sports Bras',
        url: '/clothing/Sports Bars'
    },
    {
        title: 'Jumpsuits & Rompers',
        url: '/clothing/Jumpsuits & Rompers'
    },
    {
        title: 'Skirts & Dresses',
        url: '/clothing/Skirts & Dresses'
    },
    {
        title: 'Bodysuits',
        url: '/clothing/Bodysuits'
    }
]

export const ColorsList = createContext([
    {
        title: 'Black',
        value: '#000'
    },
    {
        title: 'Blue',
        value: '#1790C8'
    },
    {
        title: 'Brown',
        value: '#825D41'
    },
    {
        title: 'Orange',
        value: '#F36B26'
    },
    {
        title: 'Pink',
        value: '#F0728F'
    },
    {
        title: 'Gray',
        value: '#808080'
    },
    {
        title: 'White',
        value: '#FFF'
    },
    {
        title: 'Red',
        value: '#E7352B'
    },
    {
        title: 'Green',
        value: '#7BBA3C'
    },
    {
        title: 'Yellow',
        value: '#FED533'
    },
    {
        title: 'Purple',
        value: '#8D429F'
    }
])

export const BrandList = createContext([
    'Nike', 'Jordan', 'ACG'
])

export const SizeList = createContext([
    '33.5', '34.5', '35.5', '36', '36,5', '38', '39', '40', '40.5'
])