import React from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='flex justify-between items-start gap-2 container mx-auto mt-6'>
            <div className='w-[311px] bg-white'>
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
            <div className='w-full px-4 box-border'>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className='  text-[#666666]'>
                        <p className='text-2xl font-medium'> Get <span className='text-[#222222]'>$40-620</span> when you
                            trade in an iPhone.
                        </p>
                        <div className='flex justify-between items-center gap-2 mb-3'>
                            <p>Your device</p>
                            <p className='text-end text-sm'>Estimated trade-
                                in value</p>
                        </div>
                        {
                            [...Array(4).keys()].map(item => {
                                return <div key={item} className='flex justify-between items-center py-2 border-b gap-2 text-lg text-[#4E4E4E]'>
                                    <p>iPhone 14 pro Max</p>
                                    <p className='text-end text-sm'>Up to $620</p>
                                </div>
                            })
                        }
                        <button className='flex  justify-center items-center gap-2 text-base bg-blue-500 text-white w-fit px-4 py-2 rounded-md mt-3'>
                            Find your trade-in value <CiSearch />
                        </button>
                    </div>
                    <img className='w-full' src="https://i.ibb.co/X3L0Srn/image-21.png" alt="" />
                </div>
                <div className='grid grid-cols-2 justify-center items-center gap-4'>
                    <div className='grid grid-cols-2 justify-center items-center  bg-[#2D357B] text-white p-4'>
                        <div>
                            <p className='text-xl font-semibold'>“SWAPING AT YOUR
                                FINGER TIPS!”</p>
                            <p className='text-xl font-semibold my-2'>No More Expensive</p>
                            <p className='text-base font-semibold mb-2' my-2>Hotel or Car Rents</p>
                            <p className='text-base font-semibold'>To Enjoy Your Family Vacation </p>
                        </div>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-contain' src="https://i.ibb.co/chN4HcL/image-10-1.png" alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 justify-center items-center  bg-[#FFECDF]  p-4'>
                        <div>
                            <p className='text-xl font-semibold'>“SWAPING AT YOUR
                                FINGER TIPS!”</p>
                            <p className='text-xl font-semibold my-2'>No More Expensive</p>
                            <p className='text-base font-semibold mb-2'>Hotel or Car Rents</p>
                            <p className='text-base font-semibold'>To Enjoy Your Family Vacation </p>
                        </div>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-contain' src="https://i.ibb.co/85v0Qfs/image-9.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[280px] text-center  flex flex-col gap-2'>
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

export default Categories