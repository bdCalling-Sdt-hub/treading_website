import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import { Home } from '../Pages/Home'
import Chat from '../Pages/Chat'
import Swap from '../Pages/Swap'
import ProductsDetails from '../Pages/ProductsDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/swap',
                element: <Swap />
            },
            {
                path: '/product-details/:id',
                element: <ProductsDetails />
            },
        ]
    }
])