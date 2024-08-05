import { Drawer, Dropdown } from "antd";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoLanguage, IoNotificationsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false);
    const items = [
        {
            key: '1',
            label: (
                <Link to={`/my-profile`}>
                    Profile
                </Link>
            ),
        },
        {
            key: '1',
            label: (
                <Link to={`/sign-in`}>
                    Sign In
                </Link>
            ),
        },
        {
            key: '1',
            label: (
                <button onClick={()=>localStorage.removeItem('token')}>
                    Log Out
                </button>
            ),
        },
    ];
    const navlinks = [
        {
            path: '/',
            label: 'Home'
        },
        {
            path: '/chat',
            label: 'Chat'
        },
        {
            path: '/swap',
            label: 'Swap'
        },
        {
            path: '/swift-points',
            label: 'Swift Points'
        },
        {
            path: '/agreements',
            label: 'Agreements'
        },
        {
            path: '/tutorial',
            label: 'Tutorial'
        },
    ]
    return (
        <div className="bg-[#5D91F4] py-2 text-white">
            <div className=' container mx-auto'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex justify-start items-center gap-3'>
                        <p className=' text-base font-normal'>Points to Date: 05-12-2024</p>
                        <div className='w-[2px] h-[20px] bg-white'>

                        </div>
                        <p className=' text-base font-normal'>Gold: 000,000</p>
                    </div>
                    <div className='flex justify-start items-center border-white border'>
                        <button style={{
                            transition: '.5s'
                        }} className="h-[40px] px-3 text-lg bg-white box-border text-blue-600">
                            <IoLanguage />
                        </button>
                        <button style={{
                            transition: '.5s'
                        }} className="h-[40px] px-3 text-lg hover:bg-white box-border hover:text-blue-600">
                            Eng
                        </button>
                        <button style={{
                            transition: '.5s'
                        }} className="h-[40px] px-3 text-lg hover:bg-white box-border hover:text-blue-600">
                            Spa
                        </button>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 mt-2'>
                    <div className='flex justify-start w-full items-center gap-3'>
                        <img src='./logo.png' alt="" />
                        <ul className="md:flex hidden justify-center w-full  items-center gap-6">
                            {
                                navlinks?.map((item, i) => {
                                    return <li>
                                        <NavLink to={item?.path}>{item?.label}</NavLink>
                                    </li>
                                })
                            }
                        </ul>
                        <Drawer
                            open={open}
                            onClose={() => setOpen(false)}
                            width={320}
                            height='100vh'
                            title={<img src='./logo.png' alt="" />}
                        >
                            <ul className="flex justify-start items-center gap-2 flex-col">
                                {
                                    navlinks?.map((item, i) => {
                                        return <li>
                                            <NavLink to={item?.path}>{item?.label}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </Drawer>
                    </div>
                    <div className='flex justify-between items-center gap-2 mr-1'>
                        <button className="text-2xl p-3 rounded-full bg-[#77A3F6] md:block hidden">
                            <IoNotificationsOutline />
                        </button>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottom"
                            arrow
                        >
                            <button className="flex justify-between items-center bg-white text-blue-500 md:px-3 w-fit rounded-md gap-2">
                                <img src="https://i.ibb.co/dDzHtWX/pexels-photo-771742.jpg" className="h-8 w-8 rounded-full" alt="" />
                                <div className="text-left md:block hidden mr-3">
                                    <p className="text-base font-normal whitespace-nowrap">siyam</p>
                                    <p className="text-sm -mt-1 whitespace-nowrap">point :238475</p>
                                </div>
                            </button>
                        </Dropdown>
                        <button onClick={() => setOpen(true)} className="text-2xl p-[7px] rounded-full bg-[#77A3F6] block md:hidden">
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header