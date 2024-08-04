import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Components/Shared/Header/Header'
import Footer from '../Components/Shared/Footer/Footer'
import { Drawer } from 'antd'

const Root = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <button onClick={() => setOpen(true)} className='p-2 px-3 rounded-md bg-gray-300 font-semibold fixed top-[50%] translate-y-[-50%] right-2'>
                Facts
            </button>
            <Drawer title={<p className='text-[#4E4E4E] font-semibold text-xl'>In My Words !</p>} onClose={() => setOpen(false)} open={open}>
                <div className=' text-center w-full h-full hidden lg:flex flex-col gap-2 '>
                    <div className='p-3 bg-gray-100 rounded-md'>
                        <p className='text-[#4E4E4E] font-semibold text-xl'>In My Words !</p>
                        <p className='text-base text-[#666666] my-3'>Did you Know?</p>
                        <p className='text-[#4E4E4E] font-semibold text-xl'>“Facts”</p>
                        <p className='text-base text-[#666666] my-3'>SWAPS ARE
                            PARM/TEMP AN
                            SEASONAL</p>
                    </div>
                    <div className='p-3 bg-gray-100 rounded-md'>
                        <p className='text-base text-[#666666] my-3'>You can swap
                            International & Locally </p>
                    </div>
                    <div className='p-3 bg-gray-100 rounded-md'>
                        <p className='text-base text-[#666666] my-3'>No $  needed
                            just pre-appruval</p>
                    </div>
                    <div className='p-3 bg-gray-100 rounded-md'>
                        <p className='text-base text-[#666666] my-3'>SWIFT SWAP HAS 1,000's of SWAPS DATLY</p>
                    </div>
                    <div className='p-3 bg-gray-100 rounded-md'>
                        <Link className='text-base text-[#666666] my-3'>More...</Link>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Root