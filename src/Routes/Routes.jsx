import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import { Home } from '../Pages/Home'
import Chat from '../Pages/Chat'
import Swap from '../Pages/Swap'
import ProductsDetails from '../Pages/ProductsDetails'
import SwiftPoints from '../Pages/SwiftPoints'
import Agreements from '../Pages/Agreements'
import Profile from '../Pages/Profile'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ForgetPassword from '../Pages/ForgetPassword'
import VerifyCode from '../Pages/VerifyCode'
import MyProfile from '../Pages/MyProfile'
import AddProducts from '../Pages/AddProducts'
import AboutUs from '../Pages/AboutUs'
import Facts from '../Pages/Facts'
import SponsorShip from '../Pages/SponsorShip'
import RulesRegulation from '../Pages/RulesRegulation'
import CareersOpportunities from '../Pages/CareersOpportunities'
import HelpCenter from '../Pages/HelpCenter'
import PreQuestions from '../Pages/PreQuestions'
import Tutorial from '../Pages/Tutorial'
import ResetPassword from '../Pages/ResetPassword'
import Otp from '../Pages/Otp'
import Payment from '../Pages/Payment'

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
            {
                path: 'swift-points',
                element: <SwiftPoints />
            },
            {
                path: '/agreements',
                element: <Agreements />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/my-profile',
                element: <MyProfile />
            },
            {
                path: '/add-product',
                element: <AddProducts />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/facts',
                element: <Facts />
            },
            {
                path: '/sponsor-ship',
                element: <SponsorShip />
            },
            {
                path: '/rules-regulation',
                element: <RulesRegulation />
            },
            {
                path: '/careers-opportunities',
                element: <CareersOpportunities />
            },
            {
                path: '/help-center',
                element: <HelpCenter />
            },
            {
                path: '/pre-questions/:id',
                element: <PreQuestions />
            },
            {
                path: '/tutorial',
                element: <Tutorial />
            },
            {
                path: '/payment',
                element: <Payment />
            },
        ]
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <Register />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/otp',
        element: <Otp />
    },
    {
        path: '/verify-otp',
        element: <VerifyCode />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    },
])