import React from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/Shared/ProductCard/ProductCard'
import { Input } from 'antd'
import { IoSearch } from 'react-icons/io5'
import earth from '../assets/icon/earth.png'
const Swap = () => {
    return (
        <div className='container mx-auto mt-8 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <div className=' bg-white h-full w-full'>
                <button className='flex  justify-center items-center gap-2 text-base bg-blue-500 text-white w-full py-2 rounded-t-md'>
                    <BiSolidCategory /> Categories
                </button>
                {
                    [...Array(10).keys()].map(item => {
                        return <button key={item} className='flex  justify-between items-center gap-2 text-base text-[#666666] w-full py-2 px-2'>
                            Categories <MdKeyboardArrowRight />
                        </button>
                    })
                }
            </div>
            <div className='col-span-3 px-2  h-full w-full'>
                <div className='flex justify-between items-center gap-6'>
                    <Input className='py-2' prefix={<IoSearch />} />
                    <Input className='py-2' prefix={<img src={earth} />} />
                    <button className='bg-blue-500 text-white px-8 rounded-md py-2 whitespace-nowrap'>
                        Add new Product
                    </button>
                </div>
                <div className='pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                    {
                        [...Array(40).keys()].map((item, i) => {
                            return <ProductCard key={i} data={item} />
                        })
                    }
                </div>
            </div>
            <div className=' text-center  flex flex-col gap-2  h-full w-full'>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-[#4E4E4E] font-semibold text-xl'>In My Words !</p>
                    <p className='text-base text-[#666666] my-3'>Did you Know?</p>
                    <p className='text-[#4E4E4E] font-semibold text-xl'>“Facts”</p>
                    <p className='text-base text-[#666666] my-3'>SWAPS ARE
                        PARM/TEMP AN
                        SEASONAL</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>You can swap
                        International & Locally </p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>No $  needed
                        just pre-appruval</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>SWIFT SWAP HAS 1,000's of SWAPS DATLY</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <Link className='text-base text-[#666666] my-3'>More...</Link>
                </div>
            </div>
        </div>
    )
}

export default Swap
