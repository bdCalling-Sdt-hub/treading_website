import { Carousel, Form, Input, Modal } from 'antd';
import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { Link, useNavigate, } from 'react-router-dom';
import ProductCard from '../Components/Shared/ProductCard/ProductCard';
import { IoMdSwap } from 'react-icons/io';
import TextArea from 'antd/es/input/TextArea';
import { GrLocation } from 'react-icons/gr';

const MyProfile = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const images = ['https://i.ibb.co/Z2zHG1r/Rectangle-210.png', 'https://i.ibb.co/WysMnRt/Rectangle-210-1.png', 'https://i.ibb.co/ZYgRK5t/Rectangle-210-2.png']
    const [tab, setTab] = useState('info')
    const [rating, setRating] = useState(3)
    const [open, setOpen] = useState(false)
    const [OpenAcceptModal, setOpenAcceptModal] = useState(false)
    const [OpenDetailsModal, setOpenDetailsModal] = useState(false)
    const onFinish = (value) => {
        console.log(value)
    }
    const onRating = (value) => {
        console.log(value)
    }
    const Navigate = useNavigate()

    const handleSendMessage = () => {
        Navigate('/chat')
    }
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
                    {/* <div className='flex justify-center items-center gap-2 mt-3'>
                        <button className='px-6 py-3 bg-blue-500 text-white rounded-md'>
                            Comments (20)
                        </button>
                        <button className='p-3 text-blue-500 bg-transparent rounded-md text-2xl'>
                            <FaRegComment />
                        </button>
                    </div> */}
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
                {
                    <div className='max-w-3xl mx-auto flex justify-between items-center gap-2 px-[3%] mb-8 flex-wrap'>
                        <button onClick={() => setTab('info')} className={`sm:text-xl text-sm   sm:font-bold pb-3 ${tab === 'info' ? 'border-b-4' : ''} border-blue-500`}>
                            Personal info
                        </button>
                        <button onClick={() => setTab('history')} className={`sm:text-xl text-sm  sm:font-bold pb-3 ${tab === 'history' ? 'border-b-4' : ''} border-blue-500`}>
                            Swapping History
                        </button>
                        <button onClick={() => setTab('request')} className={`sm:text-xl text-sm  sm:font-bold pb-3 ${tab === 'request' ? 'border-b-4' : ''} border-blue-500`}>
                            Swapping Request
                        </button>
                    </div>
                }
                {
                    tab === 'info' && <div className='my-4 w-full mt-8'>
                        <Form
                            layout='vertical'
                            className='w-full md:grid grid-cols-2 gap-3 max-w-3xl mx-auto'
                        >
                            <Form.Item className='w-full'
                                label='First Name'
                                name={`first_name`}
                            >
                                <Input placeholder='shaharul' />
                            </Form.Item>
                            <Form.Item className='w-full'
                                label='Last Name'
                                name={`last_name`}
                            >
                                <Input placeholder='siyam' />
                            </Form.Item>
                            <Form.Item className='w-full'
                                label='Email'
                                name={`email`}
                            >
                                <Input type='email' placeholder='siyam@gmail.com' />
                            </Form.Item>
                            <Form.Item className='w-full'
                                label='Phone Number'
                                name={`phone`}
                            >
                                <Input type='text' placeholder='65421541850' />
                            </Form.Item>
                            <Form.Item className='w-full col-span-2'
                                label='Address'
                                name={`address`}
                            >
                                <Input type='text' placeholder='bogra bangladesh ' />
                            </Form.Item>
                            <div className='col-span-2 text-center mb-5'>
                                <button className='px-8 py-3 rounded-md text-white bg-blue-500'>
                                    update
                                </button>
                            </div>
                        </Form>
                    </div>
                }

                {
                    tab === 'history' && <div className='container mx-auto px-[2%] md:px-[6%] lg:px-[8%] '>
                        <div className='md:flex justify-between  items-center gap-2 hidden mt-10 mb-4'>
                            <p className='font-semibold'>Swap With</p>
                            <p className='font-semibold'>Swap Items</p>
                            <p className='font-semibold'>Action</p>
                        </div>
                        {
                            [...Array(9).keys()].map((item, i) => {
                                return <div key={i} className='flex flex-col  gap-2 md:grid grid-cols-3 my-2 text-[#222222]   border-b pb-8'>
                                    <div className='w-full flex md:justify-start justify-center items-center gap-2'>
                                        <img src="https://images.unsplash.com/photo-1721679241368-465acff29360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D" className='w-10 h-10 rounded-full object-cover' alt="" />
                                        <div>
                                            <p className='text-blue-500 text-base'>nadim</p>
                                            <p className='text-sm'>12/06/24</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <p>Samsung Galaxy S22</p>
                                        <IoMdSwap className='text-blue-500' />
                                        <p>Sony Y1G Android TV</p>
                                    </div>
                                    <div className='md:text-end text-center'>
                                        <button onClick={() => setOpen(true)} className='text-blue-500 border border-blue-500 rounded-md px-8 py-3 w-fit'>
                                            Review
                                        </button>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                }
                {
                    tab === 'request' && <div className='container mx-auto  px-[2%] md:px-[6%] lg:px-[8%] '>
                        <div className='md:flex justify-around items-center gap-2 hidden mt-10 mb-4'>
                            <p className='font-semibold '>swap With</p>
                            <p className='font-semibold'>Swap Items</p>
                            <p className='font-semibold'>Action</p>
                        </div>
                        {
                            [...Array(9).keys()].map((item, i) => {
                                return <div key={i} className='flex flex-col gap-2 md:grid grid-cols-3 my-2 text-[#222222]'>
                                    <div className='w-full flex md:justify-start justify-center items-center gap-2'>
                                        <img src="https://images.unsplash.com/photo-1721679241368-465acff29360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D" className='w-10 h-10 rounded-full object-cover' alt="" />
                                        <div>
                                            <p className='text-blue-500 text-base'>nadim</p>
                                            <p className='text-sm'>12/06/24</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <p>Samsung Galaxy S22</p>
                                        <IoMdSwap className='text-blue-500' />
                                        <p>Sony Y1G Android TV</p>
                                    </div>
                                    <div className='text-center'>
                                        <button onClick={() => setOpenAcceptModal(true)} className='text-green-500 border border-green-500 rounded-md px-8 py-3 w-fit m-2'>
                                            Accept
                                        </button>
                                        <button className='text-red-500 border border-red-500 rounded-md px-8 py-3 w-fit m-2'>
                                            Reject
                                        </button>
                                        <button onClick={() => setOpenDetailsModal(true)} className='text-blue-500 rounded-md px-3 py-3 w-fit m-2'>
                                            view details
                                        </button>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                }
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
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={false}
                centered
            >
                <div>
                    <p>Rating</p>
                    <div className='flex justify-start items-center gap-1'>
                        {
                            [...Array(5).keys()]?.map((item, i) => {
                                return <FaStar onClick={() => setRating(i + 1)} className={`${rating <= i ? '' : 'text-yellow-500'} text-2xl cursor-pointer`} />
                            })
                        }
                    </div>
                    <Form
                        layout='vertical'
                        onFinish={onRating}
                        className='mt-4'
                    >
                        <Form.Item
                            label='Comments'
                            name={`review`}
                        >
                            <TextArea style={{
                                resize: 'none',
                                height: 200
                            }} />
                        </Form.Item>
                        <button onClick={() => setOpen(false)} className='w-full py-3 bg-blue-500 text-white mt-5 rounded-md'>
                            Submit
                        </button>
                    </Form>
                </div>
            </Modal>
            <Modal
                open={OpenAcceptModal}
                onCancel={() => setOpenAcceptModal(false)}
                footer={false}
                centered
            >
                <div className=' p-4 rounded-md gap-2'>
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
                    <div className='flex justify-between items-center'>
                        <button onClick={() => setOpenAcceptModal(false)} className='text-blue-500 border border-blue-500 rounded-md px-8 py-3 w-fit m-2'>
                            Not now
                        </button>
                        <button onClick={() => handleSendMessage()} className='bg-blue-500 border text-white border-blue-500 rounded-md px-8 py-3 w-fit m-2'>
                            Message
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={OpenDetailsModal}
                onCancel={() => setOpenDetailsModal(false)}
                footer={false}
                centered
                width={`100%`}
            >
                <div className='container mx-auto md:grid grid-cols-2 flex flex-col mt-10 gap-6'>
                    <div className='overflow-y-scroll'>
                        <div className='w-full h-fit'>
                            <div className='w-full h-[400px] rounded-md flex justify-center items-center'>
                                <img className='w-full h-full object-contain' src={images[imageIndex]} alt="" />
                            </div>
                            {/* <div className='w-full h-fit rounded-md items-center flex mt-1 gap-3 justify-start bg-white px-1'>
                                {
                                    images?.map((item, i) => {
                                        return <img className='w-fit h-[90px] object-contain rounded-md cursor-pointer hover:scale-105 transition-all' onClick={() => {
                                            setImageIndex(i)
                                        }} src={item} alt="" />
                                    })
                                }
                            </div> */}
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
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
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
                        </div>
                    </div>
                    <div className='overflow-y-scroll'>
                        <div className='w-full h-fit'>
                            <div className='w-full h-[400px] rounded-md flex justify-center items-center'>
                                <img className='w-full h-full object-contain' src={images[imageIndex]} alt="" />
                            </div>
                            {/* <div className='w-full h-fit rounded-md items-center flex mt-1 gap-3 justify-start bg-white px-1'>
                                {
                                    images?.map((item, i) => {
                                        return <img className='w-fit h-[90px] object-contain rounded-md cursor-pointer hover:scale-105 transition-all' onClick={() => {
                                            setImageIndex(i)
                                        }} src={item} alt="" />
                                    })
                                }
                            </div> */}
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
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p>
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
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MyProfile
