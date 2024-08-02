import React from 'react'
import ProductCard from '../Shared/ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const TopRatedProducts = () => {
    return (
        <div className='container mx-auto mt-10'>
            <p id='sectionHeading' className='text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3'>Top Products</p>
            <div className='text-end'>
                <Link className='text-blue-500'>
                    view all
                </Link>
            </div>
            <div className='pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                {
                    [...Array(4).keys()].map((item, i) => {
                        return <ProductCard key={i} data={item} />
                    })
                }
            </div>
        </div>
    )
}

export default TopRatedProducts
