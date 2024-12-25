import { Input, Spin } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { BsFillTriangleFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosArrowForward, IoIosSend } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useUserData } from '../ContextProvider/UserDataProvider'
import { imageUrl } from '../Redux/States/baseApi'
import moment from 'moment'
import { useGetMessageQuery, useSendMessageMutation } from '../Redux/Apis/chatApis'
import toast from 'react-hot-toast'

const Chat = () => {
    const [message, setMessage] = useState('')
    const [tab, setTab] = useState(true)
    const { conversation, socket } = useUserData()
    const [sendMessage, { isLoading: sendingMessage }] = useSendMessageMutation()
    const id = new URLSearchParams(window.location.search).get('id') || conversation?.data?.[0]?.participants?.[0]?._id
    const { data, isLoading, isFetching } = useGetMessageQuery(id)
    const [messages, setMessages] = useState(data?.messages || [])
    const navigate = useNavigate()
    const messageRef = useRef()

    useEffect(() => {
        if (socket) {
            const handleMessage = (msg) => {
                setMessages((prev) => [...prev, msg]);
            };
            socket.on('new-message', handleMessage);
            return () => {
                socket.off('new-message', handleMessage);
            };
        }
    }, [socket]);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [messageRef, messages])

    useEffect(() => {
        if (data?.messages) {
            setMessages(data?.messages)
        }
    }, [data?.messages]);
    const handleSendMessage = () => {
        if (!message) return
        const data = {
            "receiverId": id,
            "message": message,
        }
        const formData = new FormData()
        Object.keys(data)?.map(key => {
            formData.append(key, data[key])
        })
        sendMessage({ data: formData }).unwrap()
            .then(res => {
                // toast.success(res?.message)
            }).catch(err => {
                toast.error(err?.data?.message)
            })
    }
    return (
        <div className='container mx-auto lg:grid grid-cols-7 mt-8 gap-6 '>
            <div className={` ${tab ? 'col-span-7 lg:col-span-3' : 'col-span-3 hidden lg:block'} bg-white p-3 rounded-md`}>
                <Input className=' py-2 ' prefix={<IoSearch />} />
                <p className='text-lg text-[#4E4E4E] font-semibold my-2 '>Chats</p>
                <div className={`flex flex-col gap-4 justify-start items-start w-full`}>
                    {
                        conversation?.data?.map((item, i) => {
                            return <div onClick={() => {
                                setTab(false)
                                window.history.pushState({}, '', `${window.location.pathname}?${(() => { const params = new URLSearchParams(window.location.search); params.set('id', item?.participants?.[0]?._id); return params.toString(); })()}`);
                            }} className='flex justify-between items-start gap-2 hover:bg-black hover:bg-opacity-10 w-full rounded-md p-1 cursor-pointer' key={item?._id}>
                                <div className='flex justify-start items-center gap-2'>
                                    <img className='w-16 h-16 rounded-full object-cover' src={imageUrl(item?.participants?.[0]?.profile_image)} alt="" />
                                    <div className=''>
                                        <p className='text-[#4E4E4E] text-lg font-medium'>{item?.participants?.[0]?.name}</p>
                                        <p className='text-[#666666] text-sm '>{item?.messages[item?.messages?.length - 1]?.message}</p>
                                    </div>
                                </div>
                                <p className='text-end text-sm text-[#6B6B6B]'>{moment(item?.messages[item?.messages?.length - 1]?.createdAt).format('lll')}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={`${tab ? ' col-span-4 hidden lg:block' : 'col-span-7 lg:col-span-4'} bg-white p-3 rounded-md`}>
                <div className='flex justify-between items-center gap-2  w-full rounded-md p-1 pb-4 border-b' >
                    <div onClick={() => {
                        navigate(`/profile/${data?.userDetails?._id}`)
                    }} className='flex justify-start items-center gap-2'>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            setTab(true)

                        }} className='p-3 bg-gray-300 text-xl lg:hidden block'>
                            <FaArrowLeft />
                        </button>
                        <img className='w-16 h-16 rounded-full object-cover' src={imageUrl(data?.userDetails?.profile_image)} alt="" />
                        <div>
                            <p className='text-[#4E4E4E] text-lg font-medium'>{data?.userDetails?.name}</p>
                            {/* <p className='text-[#666666] text-sm '>Hi Friends, Wassup!</p> */}
                        </div>
                    </div>
                    <Link to={`/profile/${data?.userDetails?._id}`}>
                        <IoIosArrowForward size={30} />
                    </Link>
                </div>
                <div ref={messageRef} className=' h-[600px] overflow-y-scroll py-2'>
                    {
                        (isLoading) ? <div className='flex justify-center items-center h-full'>
                            <Spin size='large' />
                        </div> :
                            messages?.map((item, i) => {
                                return <>
                                    <div key={item?._id} className={`w-fit max-w-[70%] text-white px-6 rounded-md py-2 my-2 relative ${item?.receiverId !== id ? 'mr-auto ml-4 bg-[#6B6B6B]' : 'ml-auto mr-4 bg-[#1A66FF]'}`}>
                                        <p>{item?.message}</p>
                                        <BsFillTriangleFill className={`text-2xl ${item?.receiverId !== id ? 'text-[#6B6B6B] -left-2 bottom-[-1px]' : ' text-[#1A66FF] -right-2  bottom-[-1px]'} absolute `} />
                                    </div>
                                    {item?.message_img && <img className={`${item?.receiverId !== id ? 'mr-auto ml-4 bg-[#6B6B6B]' : 'ml-auto mr-4 bg-[#1A66FF]'} w-20`} src={imageUrl(item?.message_img)} />}
                                </>
                            })
                    }
                </div>
                <div>
                    <Input onChange={(e) => setMessage(e.target.value)} value={message} placeholder='write your message ' className='py-2 ' suffix={sendingMessage ? <Spin size='small' /> : <IoIosSend onClick={handleSendMessage} size={30} className='cursor-pointer hover:text-blue-500' />} />
                </div>
            </div>
        </div>
    )
}

export default Chat
