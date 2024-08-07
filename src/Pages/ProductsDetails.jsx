import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { MdKeyboardArrowDown, MdOutlineSwapVerticalCircle } from 'react-icons/md'
import ProductCard from '../Components/Shared/ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const ProductsDetails = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const images = ['https://i.ibb.co/Z2zHG1r/Rectangle-210.png', 'https://i.ibb.co/WysMnRt/Rectangle-210-1.png', 'https://i.ibb.co/ZYgRK5t/Rectangle-210-2.png']
    return (
        <div className='container mx-auto md:grid grid-cols-3 flex flex-col mt-10 gap-6'>
            <div className='w-full h-full'>
                <div className='w-full h-[400px] bg-white rounded-md flex justify-center items-center'>
                    <img className='w-full h-full object-contain' src={images[imageIndex]} alt="" />
                </div>
                <div className='w-full h-[190px] rounded-md grid grid-cols-3 mt-1 gap-3 bg-white px-1'>
                    {
                        images?.map((item, i) => {
                            return <img key={i} className='w-full h-full object-contain rounded-md cursor-pointer hover:scale-105 transition-all' onClick={() => {
                                setImageIndex(i)
                            }} src={item} alt="" />
                        })
                    }
                </div>
            </div>
            <div className='w-full col-span-2 p-6 rounded-md text-[#4E4E4E] '>
                <div className='flex justify-start items-center gap-4'>
                    <p className=' text-[#4E4E4E]'>Swap on 21 Mar 2:45 PM </p>
                    <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> Used</p>
                </div>
                <p className='text-xl font-semibold mt-2'>Samsung Galaxy S23</p>
                <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                    <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>$465+</span></p>
                    <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p>
                    {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
                </div>
                <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                    <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>Zahid Hossain (Gold)</span></p>
                    <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> Naperville</p>
                </div>
                <p className='font-medium mt-2'>Description: </p>
                <p className='text-justify mb-2'>The Samsung 32 Y1G Y Series 32-Inch Android TV is Give your eyes pleasure with the 16M Display colors. You can connect anything with the Samsung TV Y series, very useful connections, including video games and your favorite binge-worthy TV shows.</p>
                <p className=' flex justify-start items-center gap-2'>By swapping you can earn up to  <FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
                <div className='flex justify-start items-center gap-2 mt-3'>
                    <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" className='w-12 h-12 rounded-full object-cover' alt="" />
                    <div>
                        <p className='font-semibold'>MD. Abdullah Al Mamun</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaStar className='text-yellow-400 text-2xl' /> 4.7/5.0</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-7'>
                    <button className='flex justify-center items-center w-fit whitespace-nowrap px-8 py-3 text-base bg-blue-500 text-white mt-3 rounded-md'>
                        <MdOutlineSwapVerticalCircle className='rotate-90 text-2xl' />   Add to Swap
                    </button>
                    <button className='flex justify-center items-center w-fit whitespace-nowrap p-3  text-base bg-blue-500 text-white mt-3 rounded-md'>
                        <MdKeyboardArrowDown className=' text-2xl' />
                    </button>
                </div>
                <button className='flex justify-center items-center w-fit whitespace-nowrap p-3 px-20 text-base bg-blue-500 text-white mt-3 rounded-md'>
                    Send Request
                </button>
            </div>
            <div className='container w-full mx-auto mt-10 col-span-3'>
                <p id='sectionHeading' className='text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3'>Similar Products</p>
                <div className='text-end'>
                    <Link to={`/swap`} className='text-blue-500'>
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
        </div>
    )
}

export default ProductsDetails
