import { Carousel } from 'antd';
import React from 'react'
import { FaRegComment, FaRegStar } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../Components/Shared/ProductCard/ProductCard';
import { useUserData } from '../ContextProvider/UserDataProvider';
import { useFetchPartnerProfileQuery } from '../Redux/Apis/authApis';
import { imageUrl } from '../Redux/States/baseApi';

const Profile = () => {
    const { id } = useParams()
    const { data } = useFetchPartnerProfileQuery(id)
    // console.log(data)
    return (
        <>
            <div className='container mx-auto bg-white'>
                <div className=' p-6 rounded-md  flex justify-center items-center flex-col mt-10'>
                    <img className='h-24 w-24 rounded-full object-cover' src={imageUrl(data?.data?.profile?.profile_image)} alt="" />
                    <p className='text-[#222222] text-3xl font-semibold'>{data?.data?.profile?.name}</p>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <p className='text-lg font-medium'>Overall Rating:</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'><FaRegStar className='text-yellow-400 text-2xl' /> {data?.data?.average_rating}</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <p className='text-lg font-medium'>Overall point:</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'><FaRegStar className='text-yellow-400 text-2xl' /> {data?.data?.profile?.point} Points</p>
                    </div>
                    {/* <div className='flex justify-center items-center gap-4 mt-3'>
                        <div>
                            <p className='text-lg font-medium'>Membership Since:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>12/08/22</p>
                        </div>
                        <div>
                            <p className='text-lg font-medium'>Last Site Visit:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>12/08/22</p>
                        </div>
                    </div> */}
                    <div className='flex justify-center items-center gap-2 mt-3'>
                        <button className='px-6 py-3 bg-blue-500 text-white rounded-md'>
                            Ratings ({data?.data?.ratting?.length})
                        </button>
                        {/* <button className='p-3 text-blue-500 bg-transparent rounded-md text-2xl'>
                            <FaRegComment />
                        </button> */}
                    </div>
                </div>
                <div className='max-w-[600px] mx-auto'>
                    <Carousel arrows infinite={false}>
                        {
                            data?.data?.ratting.map((item, i) => {
                                return <div key={item?._id} className=' p-4 rounded-md gap-2'>
                                    <div className='flex justify-center flex-col w-full  items-center py-3'>
                                        <img className='h-16 w-16 rounded-full object-cover' src={imageUrl(item?.user?.profile_image)} alt="" />
                                        <p className='text-[#222222] text-xl font-semibold'>{item?.user?.name}</p>
                                        <span className=' text-[#4E4E4E] flex justify-start items-center gap-1 my-2'>
                                            {

                                                [...Array(item?.ratting || 0).keys()].map(item => <FaRegStar key={item} className='text-yellow-400 text-2xl' />)
                                            }
                                        </span>
                                        <p className=' text-center px-8'>{item?.comment}</p>
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
                    {/* <Link className='text-blue-500'>
                        view all
                    </Link> */}
                </div>
                <div className='pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                    {
                        data?.data?.product?.map((item, i) => {
                            return <ProductCard key={i} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Profile
