import React from 'react'
import { Link } from 'react-router-dom'

const MemberShipOptions = () => {
    const data = [
        {
            name: 'Gold',
            price: '$19.99',
            desc: 'Per Months',
            points: 'From (25,000-99,999) points'
        },
        {
            name: 'Platinum',
            price: '25,000',
            desc: 'Points Need to Auto Upgrade',
            points: 'From (25,000-99,999) points'
        },
        {
            name: 'Platinum',
            price: '100,000',
            desc: 'Points Need to Auto Upgrade',
            points: 'From (100,000+) points'
        },
    ]
    return (
        <div className='container mx-auto mt-10'>
            <p id='sectionHeading' className='text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3'>Membership Options</p>
            <div className='pt-6 flex flex-col justify-center items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((item, i) => {
                        return <div key={i} className={`p-4 ${i === 0 ? 'bg-[#EC9200]' : i === 1 ? 'bg-[#5D91F4]' : 'bg-[#163165]'} w-full h-full rounded-md text-center flex flex-col justify-center items-center gap-4 text-white py-8`}>
                            <p className='text-2xl font-semibold'>{item?.name}</p>
                            <p className='text-7xl font-bold'>{item?.price}</p>
                            <p className='text-xl font-semibold'>{item?.desc}</p>
                            <p className='text-xl font-semibold'>{item?.points}</p>
                            {
                                i === 0 && <Link to={`/pre-questions`} className='px-8 rounded-md py-2 bg-white text-black'>
                                    Apply
                                </Link>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MemberShipOptions
