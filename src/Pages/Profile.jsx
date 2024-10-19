import { Carousel } from 'antd';
import React from 'react'
import { FaRegComment, FaRegStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import ProductCard from '../Components/Shared/ProductCard/ProductCard';
import { useUserData } from '../ContextProvider/UserDataProvider';

const Profile = () => {
    const { user } = useUserData()
    return (
        <>
            <div className='container mx-auto bg-white'>
                <div className=' p-6 rounded-md  flex justify-center items-center flex-col mt-10'>
                    <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p className='text-[#222222] text-3xl font-semibold'>Zahid Hossain</p>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <p className='text-lg font-medium'>Overall Rating:</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <div>
                            <p className='text-lg font-medium'>Membership Since:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>12/08/22</p>
                        </div>
                        <div>
                            <p className='text-lg font-medium'>Last Site Visit:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>12/08/22</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-3'>
                        <button className='px-6 py-3 bg-blue-500 text-white rounded-md'>
                            Comments (20)
                        </button>
                        <button className='p-3 text-blue-500 bg-transparent rounded-md text-2xl'>
                            <FaRegComment />
                        </button>
                    </div>
                </div>
                <div className='max-w-[600px] mx-auto'>
                    <Carousel arrows infinite={false}>
                        {
                            [...Array(7).keys()].map((item, i) => {
                                return <div key={i} className=' p-4 rounded-md gap-2'>
                                    <div className='flex justify-center flex-col w-full  items-center py-3'>
                                        <img className='h-16 w-16 rounded-full object-cover' src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                                        <p className='text-[#222222] text-xl font-semibold'>Zahid Hossain</p>
                                        <span className=' text-[#4E4E4E] flex justify-start items-center gap-1 my-2'>
                                            <FaRegStar className='text-yellow-400 text-2xl' />
                                            <FaRegStar className='text-yellow-400 text-2xl' />
                                            <FaRegStar className='text-yellow-400 text-2xl' />
                                            <FaRegStar className='text-yellow-400 text-2xl' />
                                            <FaRegStar className='text-yellow-400 text-2xl' />
                                        </span>
                                        <p className=' text-center px-8'>I highly recommend this swapper for anyone in need of a reliable service. My overall experience with it has been exceptionally positive.</p>
                                    </div>

                                </div>
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <div className='container w-full mx-auto mt-10 col-span-3'>
                <p id='sectionHeading' className='text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3'>Available Items</p>
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
        </>
    )
}

export default Profile
