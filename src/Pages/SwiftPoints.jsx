import { Input } from 'antd'
import { FaRegStar } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { IoSearch, IoSwapHorizontalSharp } from 'react-icons/io5'
import { useGetSwapHistoryQuery } from '../Redux/Apis/swapApis'
import { imageUrl } from '../Redux/States/baseApi'
import moment from 'moment'
import { useFetchProfileQuery } from '../Redux/Apis/authApis'

const SwiftPoints = () => {
    const { data } = useGetSwapHistoryQuery()
    const { data: profile } = useFetchProfileQuery()
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-between items-center gap-4'>
                    <p className='text-3xl font-medium text-[#4E4E4E] '>Swap Points History</p>
                    <div className='flex justify-start items-center gap-4'>
                        <p className='text-xl text-[#4E4E4E]'>Total Points: </p>
                        <p className='text-xl text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> {profile?.data?.result?.points} Points</p>
                    </div>
                </div>
                {/* <Input className='py-2 max-w-48' prefix={<IoSearch />} /> */}
            </div>
            <div className='flex flex-col justify-start items-center gap-2 mt-6 bg-white'>
                {
                    data?.data.map((item, i) => {
                        return <div key={i} className='flex justify-between md:flex-row flex-col items-center w-full pb-4 border-b'>
                            <div className='md:w-[45%] w-full flex justify-between items-center gap-[2%]'>
                                <div className='w-[25%] flex justify-center items-center'>
                                    <img src={imageUrl(item?.productTo?.images?.[0])} className='w-full object-contain' alt="" />
                                </div>
                                <div className='w-[73%]'>
                                    <div className='flex justify-start items-center gap-4'>
                                        <p className=' text-[#4E4E4E]'>Swap on {moment(item?.createdAt).format('LLL')} </p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> {item?.productTo?.condition}</p>
                                    </div>
                                    <p className='text-xl font-semibold mt-2'>{item?.productTo?.title}</p>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>${item?.productTo?.productValue}</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> {item?.swapUserToPoint} Points</p>
                                    </div>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>{item?.productTo?.user?.name} </span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> {item?.productTo?.user?.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[3%] w-full flex justify-center items-center text-4xl'>
                                <IoSwapHorizontalSharp className='rotate-90 md:rotate-0' />
                            </div>
                            <div className='md:w-[45%] w-full flex justify-between items-center gap-[2%]'>
                                <div className='w-[25%] flex justify-center items-center'>
                                    <img src={imageUrl(item?.productFrom?.images?.[0])} className='w-full object-contain' alt="" />
                                </div>
                                <div className='w-[73%]'>
                                    <div className='flex justify-start items-center gap-4'>
                                        <p className=' text-[#4E4E4E]'>Swap on {moment(item?.createdAt).format('LLL')} </p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> {item?.productFrom?.condition}</p>
                                    </div>
                                    <p className='text-xl font-semibold mt-2'>{item?.productFrom?.title}</p>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>${item?.productFrom?.productValue}</span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> {item?.swapUserFromPoint} Points</p>
                                    </div>
                                    <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>{item?.productFrom?.user?.name} </span></p>
                                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> {item?.productFrom?.user?.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[6%] w-full flex flex-col justify-center items-center '>
                                <p className=' text-[#4E4E4E] flex justify-start flex-col items-center gap-2 '><FaRegStar className='text-yellow-400 text-2xl' /> {item?.swapUserFromPoint+item?.swapUserToPoint} Points</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SwiftPoints
