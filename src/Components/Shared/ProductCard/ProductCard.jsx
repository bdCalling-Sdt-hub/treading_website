import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
    return (
        <div className='p-4 bg-white rounded-md text-center flex flex-col justify-center items-center gap-2 w-full'>
            <div className='w-full h-[230px]'>
                <img src="https://i.ibb.co/kQf4nFF/Rectangle-216.png" className='w-full h-full object-contain' alt="" />
            </div>
            <p className='text-[#222222] font-medium text-base'>Samsung Galaxy s23</p>
            <p>Value: <span className='text-blue-400 font-semibold'>$465+</span></p>
            <Link to={`/product-details/324`} className='bg-blue-100 text-blue-500 w-full py-2 rounded-md'>
                Details
            </Link>
            <button className='flex w-full justify-center items-center'>Add to Swap</button>
        </div>
    )
}

export default ProductCard
