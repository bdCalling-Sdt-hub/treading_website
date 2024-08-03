import { Input } from 'antd'
import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { IoSearch, IoSwapHorizontalSharp } from 'react-icons/io5'

const SwiftPoints = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-between items-center gap-4'>
                    <p className='text-3xl font-medium text-[#4E4E4E] '>Swap Points History</p>
                    <div className='flex justify-start items-center gap-4'>
                        <p className='text-xl text-[#4E4E4E]'>Total Points: </p>
                        <p className='text-xl text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 25,000 Points</p>
                    </div>
                </div>
                <Input className='py-2 max-w-48' prefix={<IoSearch />} />
            </div>
            <div className='flex flex-col justify-start items-center gap-2 mt-6 bg-white'>
                {
                    [...Array(8).keys()].map((item, i) => {
                        return <div className='flex justify-between md:flex-row flex-col items-center w-full pb-4 border-b'>
                            <div className='md:w-[48.5%] w-full flex justify-between items-center gap-[2%]'>
                                <div className='w-[25%] flex justify-center items-center'>
                                    <img src="https://i.ibb.co/mcqPdYF/Rectangle-216-1.png" className='w-full object-contain' alt="" />
                                </div>
                                <div className='w-[73%]'>
                                    <div className='flex justify-start items-center gap-4'>
                                        <p className=' text-[#4E4E4E]'>Swap on 21 Mar 2:45 PM </p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> Used</p>
                                    </div>
                                    <p className='text-xl font-semibold mt-2'>Samsung Galaxy S23</p>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>$465+</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
                                    </div>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>Zahid Hossain (Gold)</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> Naperville</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[3%] w-full flex justify-center items-center text-4xl'>
                            <IoSwapHorizontalSharp className='rotate-90 md:rotate-0' />
                            </div>
                            <div className='md:w-[48.5%] w-full flex justify-between items-center gap-[2%]'>
                                <div className='w-[25%] flex justify-center items-center'>
                                    <img src="https://i.ibb.co/mcqPdYF/Rectangle-216-1.png" className='w-full object-contain' alt="" />
                                </div>
                                <div className='w-[73%]'>
                                    <div className='flex justify-start items-center gap-4'>
                                        <p className=' text-[#4E4E4E]'>Swap on 21 Mar 2:45 PM </p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> Used</p>
                                    </div>
                                    <p className='text-xl font-semibold mt-2'>Samsung Galaxy S23</p>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>$465+</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
                                    </div>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>Zahid Hossain (Gold)</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> Naperville</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SwiftPoints
