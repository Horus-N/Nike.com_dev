import { createContext } from 'react';

export const GET_HELP_MENU_CONTEXT = createContext([
    {
        title: 'Order Status',
        url: '/orders'
    },
    {
        title: 'Delivery',
        url: '#'
    },
    {
        title: 'Returns',
        url: '#'
    },
    {
        title: 'Payment Options',
        url: '#'
    },
    {
        title: 'Contact Us',
        url: '#'
    }
])

export const ABOUT_NIKE_MENU_CONTEXT = createContext([
    {
        title: 'News',
        url: '/new'
    },
    {
        title: 'Careers',
        url: '#'
    },
    {
        title: 'Investors',
        url: '#'
    },
    {
        title: 'Sustainability',
        url: '#'
    }
])