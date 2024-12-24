import { Carousel, Form, Input, Modal, Pagination, Spin } from 'antd';
import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { Link, useNavigate, } from 'react-router-dom';
import ProductCard from '../Components/Shared/ProductCard/ProductCard';
import { IoMdSwap } from 'react-icons/io';
import TextArea from 'antd/es/input/TextArea';
import { GrLocation } from 'react-icons/gr';
import { useFetchProfileQuery, useUpdateProfileMutation } from '../Redux/Apis/authApis';
import { imageUrl } from '../Redux/States/baseApi';
import { useGetMyRatingQuery } from '../Redux/Apis/ratingsApis';
import toast from 'react-hot-toast';
import { useFetchMyProductsQuery } from '../Redux/Apis/productsApis';
import { useGetPendingSwapQuery } from '../Redux/Apis/swapApis';
import moment from 'moment';

const MyProfile = () => {
    const [form] = Form.useForm()
    const [imageIndex, setImageIndex] = useState(0)
    const images = ['https://i.ibb.co/Z2zHG1r/Rectangle-210.png', 'https://i.ibb.co/WysMnRt/Rectangle-210-1.png', 'https://i.ibb.co/ZYgRK5t/Rectangle-210-2.png']
    const [image, setImage] = useState(null)
    const [page, setPage] = useState(1)
    const [tab, setTab] = useState('info')
    const [rating, setRating] = useState(3)
    const [open, setOpen] = useState(false)
    const [OpenAcceptModal, setOpenAcceptModal] = useState(false)
    const [OpenDetailsModal, setOpenDetailsModal] = useState(false)
    const { data } = useFetchProfileQuery()
    const [update, { isLoading }] = useUpdateProfileMutation()
    const { data: myRating } = useGetMyRatingQuery()
    const { data: myProducts } = useFetchMyProductsQuery({ page })
    const { data: swapRequest } = useGetPendingSwapQuery({})
    const [selectedItem, setSelectedItem] = useState(null)
    const onFinish = (value) => {
        if (image) {
            value.profile_image = image
        }
        const formData = new FormData()
        Object.keys(value)?.map(key => {
            formData.append(key, value[key])
        })
        update(formData).unwrap()
            .then(res => {
                toast.success(res?.message || 'profile updated')
            }).catch(err => toast.error(err?.data?.message || 'something went wrong'))
    }
    const onRating = (value) => {
        //console.log(value)
    }
    const Navigate = useNavigate()

    const handleSendMessage = () => {
        Navigate('/chat')
    }
    useEffect(() => {
        if (data?.data?.result) {
            form.setFieldsValue(data?.data?.result)

        }
    }, [form, data?.data?.result])
    console.log(swapRequest)
    return (
        <>
            <div className='container mx-auto bg-white'>
                <div className=' p-6 rounded-md  flex justify-center items-center flex-col mt-10'>
                    <label htmlFor='image'>
                        <img className='h-24 w-24 rounded-full object-cover cursor-pointer' src={image ? URL.createObjectURL(image) : data?.data?.result?.profile_image ? imageUrl(data?.data?.result?.profile_image) : 'https://placehold.co/400'} alt="" />
                        <input hidden type="file" onChange={(e) => setImage(e.target.files?.[0])} id='image' />
                    </label>
                    <p className='text-[#222222] text-3xl font-semibold'>{data?.data?.result?.name}</p>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <p className='text-lg font-medium'>Overall Rating:</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'><FaRegStar className='text-yellow-400 text-2xl' /> {data?.data?.ratting}</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <p className='text-lg font-medium'>Total points:</p>
                        <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'><FaRegStar className='text-yellow-400 text-2xl' /> {data?.data?.result?.points} Points</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-3'>
                        <div>
                            <p className='text-lg font-medium'>Membership Since:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>{data?.data?.planStartDate?.split('T')?.[0]}</p>
                        </div>
                        <div>
                            <p className='text-lg font-medium'>Last Site Visit:</p>
                            <p className=' text-[#4E4E4E] flex justify-start items-center gap-1'>{data?.data?.planEndDate?.split('T')?.[0]}</p>
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
                            myRating?.data?.map((item, i) => {
                                return <div key={i} className=' p-4 rounded-md gap-2'>
                                    <div className='flex justify-center flex-col w-full  items-center py-3'>
                                        <img className='h-16 w-16 rounded-full object-cover' src={imageUrl(item?.user?.profile_image)} alt="" />
                                        <p className='text-[#222222] text-xl font-semibold'>{item?.user?.name}</p>
                                        <span className=' text-[#4E4E4E] flex justify-start items-center gap-1 my-2'>
                                            {
                                                [...Array(item?.ratting).keys()].map(star => <FaRegStar key={star} className='text-yellow-400 text-2xl' />)
                                            }
                                        </span>
                                        <p className=' text-center px-8'>{item?.comment}</p>
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
                            Swaping History
                        </button>
                        <button onClick={() => setTab('request')} className={`sm:text-xl text-sm  sm:font-bold pb-3 ${tab === 'request' ? 'border-b-4' : ''} border-blue-500`}>
                            Swiping Request
                        </button>
                    </div>
                }
                {
                    tab === 'info' && <div className='my-4 w-full mt-8'>
                        <Form
                            onFinish={onFinish}
                            form={form}
                            layout='vertical'
                            className='w-full md:grid grid-cols-2 gap-3 max-w-3xl mx-auto'
                        >
                            <Form.Item className='w-full'
                                label='First Name'
                                name={`name`}
                            >
                                <Input placeholder='shaharul siyam' />
                            </Form.Item>
                            {/* <Form.Item className='w-full'
                                label='Last Name'
                                name={`last_name`}
                            >
                                <Input placeholder='siyam' />
                            </Form.Item> */}
                            <Form.Item className='w-full'
                                label='Email'
                                name={`email`}
                            >
                                <Input disabled type='email' placeholder='siyamoffice0273@gmail.com' />
                            </Form.Item>
                            <Form.Item className='w-full'
                                label='Phone Number'
                                name={`phone_number`}
                            >
                                <Input type='text' placeholder='+8801566026301' />
                            </Form.Item>
                            <Form.Item className='w-full '
                                label='Address'
                                name={`address`}
                            >
                                <Input type='text' placeholder='bogra bangladesh ' />
                            </Form.Item>
                            <div className='col-span-2 text-center mb-5'>
                                <button className='px-8 py-3 rounded-md text-white bg-blue-500'>
                                    {isLoading ? <Spin /> : 'Update'}
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
                    tab === 'request' && <div className='container mx-auto px-[2%] md:px-[6%] lg:px-[8%]  '>
                        <div className='md:flex justify-between  items-center gap-2 hidden mt-10 mb-4'>
                            <p className='font-semibold '>swap With</p>
                            <p className='font-semibold'>Swap Items</p>
                            <p className='font-semibold'>Action</p>
                        </div>
                        {
                            swapRequest?.data.map((item, i) => {
                                return <div key={i} className='flex flex-col gap-2 md:grid grid-cols-3 my-2 text-[#222222]'>
                                    <div className='w-full flex md:justify-start justify-center items-center gap-2'>
                                        <img src={imageUrl(item?.userTo?.profile_image)} className='w-10 h-10 rounded-full object-cover' alt="" />
                                        <div>
                                            <p className='text-blue-500 text-base'>{item?.userTo?.name}</p>
                                            <p className='text-sm'>{item?.createdAt?.split('T')?.[0]}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-2'>
                                        <p>{item?.productTo?.title}</p>
                                        <IoMdSwap className='text-blue-500' />
                                        <p>{item?.productFrom?.title}</p>
                                    </div>
                                    <div className='md:text-end text-center'>
                                        <button onClick={() => setOpenAcceptModal(true)} className='text-green-500 border border-green-500 rounded-md px-8 py-3 w-fit m-2'>
                                            Accept
                                        </button>
                                        <button className='text-red-500 border border-red-500 rounded-md px-8 py-3 w-fit m-2'>
                                            Reject
                                        </button>
                                        <button onClick={() => { setSelectedItem(item); setOpenDetailsModal(true) }} className='text-blue-500 rounded-md px-3 py-3 w-fit m-2'>
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
                    {/* <Link className='text-blue-500'>
                        view all
                    </Link> */}
                </div>
                <div className='pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                    {
                        myProducts?.data.map((item, i) => {
                            return <ProductCard key={i} data={item} />
                        })
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Pagination
                        pageSize={myProducts?.meta?.limit}
                        total={myProducts?.meta?.total}
                        onChange={(page) => setPage(page)}
                    />
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
                                <img className='w-full h-full object-contain' src={imageUrl(selectedItem?.productTo?.images[0])} alt="" />
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
                                <p className=' text-[#4E4E4E]'>Swap on {moment(selectedItem?.createdAt).format('LLL')}</p>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> {selectedItem?.productTo?.condition}</p>
                            </div>
                            <p className='text-xl font-semibold mt-2'>{selectedItem?.productTo?.title}</p>
                            <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>${selectedItem?.productTo?.productValue}</span></p>
                                {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p> */}
                                {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
                            </div>
                            <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>{selectedItem?.userTo?.name} ({selectedItem?.userTo?.userType})</span></p>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> {selectedItem?.userTo?.address}</p>
                            </div>
                            <p className='font-medium mt-2'>Description: </p>
                            <p className='text-justify mb-2'>{selectedItem?.productTo?.description}</p>
                            {/* <p className=' flex justify-start items-center gap-2'>By swapping you can earn up to  <FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
                            <div className='flex justify-start items-center gap-2 mt-3'>
                                <img src={imageUrl(selectedItem?.userTo?.profile_image)} className='w-12 h-12 rounded-full object-cover' alt="" />
                                <div>
                                    <p className='font-semibold'>{selectedItem?.userTo?.name}</p>
                                    {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaStar className='text-yellow-400 text-2xl' /> 4.7/5.0</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-y-scroll'>
                        <div className='w-full h-fit'>
                            <div className='w-full h-[400px] rounded-md flex justify-center items-center'>
                                <img className='w-full h-full object-contain' src={imageUrl(selectedItem?.productFrom?.images[0])} alt="" />
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
                                <p className=' text-[#4E4E4E]'>Swap on {moment(selectedItem?.createdAt).format('LLL')}</p>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Condition:</span> {selectedItem?.productFrom?.condition}</p>
                            </div>
                            <p className='text-xl font-semibold mt-2'>{selectedItem?.productFrom?.title}</p>
                            <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Value : </span> <span className='text-blue-600 font-bold'>${selectedItem?.productFrom?.productValue}</span></p>
                                {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'>Earned</p> */}
                                {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
                            </div>
                            <div className='flex justify-start items-center w-full gap-1 my-2 flex-wrap'>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'> <span>Post by: </span> <span className='text-blue-600 '>{selectedItem?.userFrom?.name} ({selectedItem?.userFrom?.userType})</span></p>
                                <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><GrLocation className=' text-2xl' /> {selectedItem?.userFrom?.address}</p>
                            </div>
                            <p className='font-medium mt-2'>Description: </p>
                            <p className='text-justify mb-2'>{selectedItem?.productFrom?.description}</p>
                            {/* <p className=' flex justify-start items-center gap-2'>By swapping you can earn up to  <FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
                            <div className='flex justify-start items-center gap-2 mt-3'>
                                <img src={imageUrl(selectedItem?.userFrom?.profile_image)} className='w-12 h-12 rounded-full object-cover' alt="" />
                                <div>
                                    <p className='font-semibold'>{selectedItem?.userFrom?.name}</p>
                                    {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaStar className='text-yellow-400 text-2xl' /> 4.7/5.0</p> */}
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
