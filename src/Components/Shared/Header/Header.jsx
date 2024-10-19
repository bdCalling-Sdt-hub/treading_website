import { Drawer, Dropdown, Popover } from "antd";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoLanguage, IoNotificationsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useUserData } from "../../../ContextProvider/UserDataProvider";
import NotificationsList from "./NotificationsList";
import { imageUrl } from "../../../Redux/States/baseApi";

const Header = () => {
    const { user, isFetching, isLoading, language, setLanguage } = useUserData();
    const [open, setOpen] = useState(false);
    // console.log(user?.data) 
    const items = [
        {
            key: '1',
            label: (
                <Link to={`/my-profile`}>
                    {language === "eng" ? "Profile" : "Perfil"}
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <button onClick={() => localStorage.removeItem('token')}>
                    {language === "eng" ? "Log Out" : "Cerrar sesión"}
                </button>
            ),
        },
    ];

    const navlinks = [
        {
            path: '/',
            label: language === "eng" ? 'Home' : 'Inicio',
        },
        {
            path: '/chat',
            label: language === "eng" ? 'Chat' : 'Chat',
        },
        {
            path: '/swap',
            label: language === "eng" ? 'Swap' : 'Intercambio',
        },
        {
            path: '/swift-points',
            label: language === "eng" ? 'Swift Points' : 'Puntos Swift',
        },
        {
            path: '/agreements',
            label: language === "eng" ? 'Agreements' : 'Acuerdos',
        },
        {
            path: '/tutorial',
            label: language === "eng" ? 'Tutorial' : 'Tutorial',
        },
    ];

    return (
        <div className="bg-[#5D91F4] py-2 text-white">
            <div className='container mx-auto'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='text-base font-normal'>
                            {language === "eng" ? 'Points to Date' : 'Puntos hasta la fecha'}: 05-12-2024
                        </p>
                        <div className='w-[2px] h-[20px] bg-white'></div>
                        <p className='text-base font-normal'>
                            {language === "eng" ? 'Gold' : 'Oro'}: 000,000
                        </p>
                    </div>
                    <div className='flex justify-start items-center border-white border'>
                        <button
                            style={{ transition: '.5s' }}
                            className={`h-[40px] px-3 text-lg ${language === 'eng' ? 'bg-white text-blue-600' : 'hover:bg-white hover:text-blue-600'}`}
                            onClick={() => setLanguage("eng")}
                        >
                            Eng
                        </button>
                        <button
                            style={{ transition: '.5s' }}
                            className={`h-[40px] px-3 text-lg ${language === 'spa' ? 'bg-white text-blue-600' : 'hover:bg-white hover:text-blue-600'}`}
                            onClick={() => setLanguage("spa")}
                        >
                            Spa
                        </button>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 mt-2'>
                    <div className='flex justify-start w-full items-center gap-3'>
                        <img src='./logo.png' alt="" />
                        <ul className="md:flex hidden justify-center w-full items-center gap-6">
                            {navlinks.map((item, i) => (
                                <li key={i}>
                                    <NavLink to={item?.path}>{item?.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <Drawer
                            open={open}
                            onClose={() => setOpen(false)}
                            width={320}
                            height='100vh'
                            title={<img src='./logo.png' alt="" />}
                        >
                            <ul className="flex justify-start items-center gap-2 flex-col">
                                {navlinks.map((item, i) => (
                                    <li key={i}>
                                        <NavLink to={item?.path}>{item?.label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </Drawer>
                    </div>
                    {user?.data?.email ? (
                        <div className='flex justify-between items-center gap-2 mr-1'>
                            <Popover
                                content={<NotificationsList />}
                                trigger="click"
                                placement="bottomRight"
                                overlayClassName="notification-popover"
                            >
                                <button className="text-2xl p-3 rounded-full bg-[#77A3F6] md:block hidden">
                                    <IoNotificationsOutline />
                                </button>
                            </Popover>
                            <Dropdown className=""
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                                arrow
                            >
                                <button className="flex justify-between items-center bg-white text-blue-500 md:px-3 w-full rounded-md gap-2">
                                    <img src={imageUrl(user?.data?.profile_image)} className="h-8 w-8 rounded-full" alt="" />
                                    <div className="text-left md:block hidden mr-3 w-fit">
                                        <p className="text-base font-normal whitespace-nowrap w-fit">{user?.data?.name}</p>
                                        <p className="text-sm -mt-1 whitespace-nowrap">
                                            {language === "eng" ? 'Point' : 'Punto'}: {user?.data?.points}
                                        </p>
                                    </div>
                                </button>
                            </Dropdown>
                            <button onClick={() => setOpen(true)} className="text-2xl p-[7px] rounded-full bg-[#77A3F6] block md:hidden">
                                <FiMenu />
                            </button>
                        </div>
                    ) : (
                        <Link to={`/sign-in`} className="text-blue-500 bg-white px-6 py-2 rounded-md whitespace-nowrap ">
                            {language === "eng" ? 'Sign In' : 'Iniciar sesión'}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
