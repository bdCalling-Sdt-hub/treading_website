import React from 'react'

const MemberShipOptions = () => {
    return (
        <div className='container mx-auto mt-10'>
            <p id='sectionHeading' className='text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3'>Membership Options</p>
            <div className='pt-6 flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    [...Array(3).keys()].map((item, i) => {
                        return <div key={i} className={`p-4 ${i === 0 ? 'bg-[#EC9200]' : i === 1 ? 'bg-[#5D91F4]' : 'bg-[#163165]'} w-full rounded-md text-center flex flex-col justify-center items-center gap-4 text-white py-8`}>
                            <p className='text-2xl font-semibold'>Gold</p>
                            <p className='text-7xl font-bold'>$19.99</p>
                            <p className='text-xl font-semibold'>Points Need to Auto Upgrade</p>
                            <p className='text-xl font-semibold'>From (25,000-99,999) points</p>
                            <button className='px-8 rounded-md py-2 bg-white text-black'>
                                Apply
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MemberShipOptions
