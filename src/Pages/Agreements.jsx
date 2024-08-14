import { Slider } from 'antd';
import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6';

const Agreements = () => {
    const [value, setValue] = useState(100000); // Initialize with the default value
    const min = 100000;
    const max = 1000000;
    const percentage = ((value - min) / (max - min)) * 100;
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const data = [
        'Can exchange products','Earn upto 1000 points by a single swap','Exclusive offers','Partner benefits'
    ]
    return (
        <div id='assignment' className='py-8 container mx-auto bg-white my-10 rounded-md text-[#FEFEFE]'>
            <div className='max-w-[850px] bg-[#FAA316] py-10 flex flex-col gap-4 justify-center items-center mx-auto rounded-md'>
                <img className='w-24 h-24 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1661346022749-36a54c0db868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                <p className='text-2xl font-bold'>Mohammad Rakib</p>
                <p className='text-base'>Membership Status: Gold</p>
                <p className='text-lg font-medium'>Total Points Earn</p>
                <p className='text-3xl font-bold'>25,850</p>
                <div className='w-[80%] mx-auto py-6'>
                    <div className="slider-container mx-auto">
                        <div className="labels">
                            <span className="label gold">Gold</span>
                            <span className="label platinum">Platinum</span>
                            <span className="label diamond">Diamond</span>
                        </div>
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={value}
                            onChange={handleChange}
                            className="slider"
                            style={{
                                background: `linear-gradient(to right, #3475F1 0%, #3475F1 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`,
                                marginTop: '30px',
                            }}
                        />
                        <div className="divider-container -mt-4">
                            <div className="divider"></div>
                            <div className="divider"></div>
                        </div>
                        <div className="values -mt-6">
                            <span>100,000</span>
                            <span>1 million</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 max-w-[650px] flex flex-col gap-4 justify-center items-center mx-auto rounded-md p-4 border text-[#4F4F4F] capitalize'>
                <p className='font-medium'>Monthly Subscription Fee </p>
                <p className='text-[#3475F1] text-3xl font-bold'>$19.99</p>
                <div className='w-[80%] text-left'>
                    <div className=' px-4 box-border'>
                        <p className='font-medium'>Your Membership Benefits:</p>
                        {
                            data.map((item, i) => {
                                return <p key={i} className='flex justify-start items-center gap-1 my-2'>
                                    <FaCircleCheck className='text-blue-500' /> {item}
                                </p>
                            })
                        }
                    </div>
                    <button className='py-3 rounded-md mt-3 w-full bg-blue-500 text-white'>
                        Pay Now
                    </button>
                    <p className='my-2 text-center '>Pay your subscription fee in time otherwise you may 
                    lose your points or downgrade your membership.</p>
                </div>
            </div>
        </div>
    )
}

export default Agreements
