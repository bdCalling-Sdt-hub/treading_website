import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { BsFillTriangleFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Chat = () => {
    const [tab, setTab] = useState(true)
    const navigate = useNavigate()
    return (
        <div className='container mx-auto lg:grid grid-cols-7 mt-8 gap-6 '>
            <div className={` ${tab ? 'col-span-7 lg:col-span-3' : 'col-span-3 hidden lg:block'} bg-white p-3 rounded-md`}>
                <Input className=' py-2 ' prefix={<IoSearch />} />
                <p className='text-lg text-[#4E4E4E] font-semibold my-2 '>Chats</p>
                <div className={`flex flex-col gap-4 justify-start items-start w-full`}>
                    {
                        [...Array(6).keys()].map((item, i) => {
                            return <div onClick={() => {
                                setTab(false)
                            }} className='flex justify-between items-start gap-2 hover:bg-black hover:bg-opacity-10 w-full rounded-md p-1 cursor-pointer' key={i}>
                                <div className='flex justify-start items-center gap-2'>
                                    <img className='w-16 h-16 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1682123606812-4fb939492af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" />
                                    <div>
                                        <p className='text-[#4E4E4E] text-lg font-medium'>Farrel Kurniawan</p>
                                        <p className='text-[#666666] text-sm '>Hi Friends, Wassup!</p>
                                    </div>
                                </div>
                                <p className='text-end text-sm text-[#6B6B6B]'>Today, 5:25pm</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={` ${tab ? ' col-span-4 hidden lg:block' : 'col-span-7 lg:col-span-4'} bg-white p-3 rounded-md`}>
                <div className='flex justify-between items-center gap-2  w-full rounded-md p-1 pb-4 border-b' >
                    <div onClick={()=>{
                        navigate('/profile')
                    }} className='flex justify-start items-center gap-2'>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            setTab(true)
                        }} className='p-3 bg-gray-300 text-xl lg:hidden block'>
                            <FaArrowLeft />
                        </button>
                        <img className='w-16 h-16 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1682123606812-4fb939492af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" />
                        <div>
                            <p className='text-[#4E4E4E] text-lg font-medium'>Farrel Kurniawan</p>
                            <p className='text-[#666666] text-sm '>Hi Friends, Wassup!</p>
                        </div>
                    </div>
                    <button>
                        <BsThreeDotsVertical />
                    </button>
                </div>
                <div className=' h-[600px] overflow-y-scroll py-2'>
                    {
                        [...Array(67).keys()].map((item, i) => {
                            return <div key={i} className={`w-fit max-w-[70%] text-white px-6 rounded-md py-2 my-2 relative ${i % 2 === 0 ? 'mr-auto ml-4 bg-[#6B6B6B]' : 'ml-auto mr-4 bg-[#1A66FF]'}`}>
                                <p>hi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis illo enim sequi. Deserunt quisquam neque omnis recusandae tenetur in ea exercitationem amet. Animi nostrum eos aut quidem alias accusamus pariatur.</p>
                                <BsFillTriangleFill className={`text-2xl ${i % 2 === 0 ? 'text-[#6B6B6B] -left-2 bottom-[-1px]' : ' text-[#1A66FF] -right-2  bottom-[-1px]'} absolute `} />
                            </div>
                        })
                    }
                </div>
                <div>
                    <Input className=' py-2 ' suffix={<IoIosSend />} />
                </div>
            </div>
        </div>
    )
}

export default Chat
