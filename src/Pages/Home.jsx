import React from 'react'
import Categories from '../Components/Home/Categories'
import TopRatedProducts from '../Components/Home/TopRatedProducts'
import MemberShipOptions from '../Components/Home/MemberShipOptions'
import JustForYou from '../Components/Home/JustForYou'

export const Home = () => {
    return (
        <div>
            <Categories />
            <TopRatedProducts />
            <MemberShipOptions />
            <JustForYou />
        </div>
    )
}
