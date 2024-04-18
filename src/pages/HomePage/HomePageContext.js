import { createContext } from 'react';


export const MENU_BOTTOM_CONTEXT = createContext([
    {
        title: 'Shoes',
        children: [
            {
                title: 'All Shoes',
                url: 'products/shoes'
            },
            {
                title: 'Running Shoes',
                url: 'products/shoes/Running'
            },
            {
                title: 'Basketball Shoes',
                url: 'products/shoes/Basketball'
            },
            {
                title: 'Football Shoes',
                url: 'products/shoes/Football'
            },
            {
                title: 'Gym & Training Shoes',
                url: 'products/shoes/Gym_&_Training'
            },
            {
                title: 'Lifestyle Shoes',
                url: 'products/shoes/Lifestyle'
            }
        ]
    },
    {
        title: 'Clothing',
        children: [
            {
                title: 'All Clothing',
                url: 'products/clothing'
            },
            {
                title: 'Hoodies & Sweatshirts',
                url: 'products/clothing/Hoodies_&_Sweatshirts'
            },
            {
                title: 'Tops & T-Shirts',
                url: 'products/clothing/Tops_&_T-Shirts'
            },
            {
                title: 'Jackets',
                url: 'products/clothing/Jackets'
            },
            {
                title: 'Shorts',
                url: 'products/clothing/Shorts'
            },
            {
                title: 'Modest Wear',
                url: '/products/clothing/Women/Modest_Wear'
            }
        ]
    },
    {
        title: 'Kid\'s',
        children: [
            {
                title: 'Kids\' Shoes',
                url: '/kids/shoes'
            },
            {
                title: 'Kids\' Basketball Shoes',
                url: '/kids/shoes/Basketball'
            },
            {
                title: 'Kids\'s Running Shoes',
                url: '/kids/shoes/Running'
            },
            {
                title: 'Kids\'s Clothing',
                url: '/kids/clothing'
            }
        ]
    }
])