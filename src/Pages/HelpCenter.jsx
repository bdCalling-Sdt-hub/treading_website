import { Collapse, Input } from 'antd'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import help_center from './../assets/icon/help_center.png'
const HelpCenter = () => {
    return (
        <div className='container mx-auto p-4 rounded-md bg-white text-[#4E4E4E]'>
            <p className='text-3xl font-medium '>How can we help you?</p>
            <Input className='w-48 mt-2' prefix={<IoSearch />} />
            <p className='text-3xl font-medium text-center my-2'>Frequently Asked Questions </p>
            <div className='flex justify-start items-start md:grid grid-cols-2 mt-6 flex-col'>
                {
                    [...Array(10).keys()].map((item, i) => {
                        return <Collapse key={i} className='w-full'
                            items={[{
                                key: i, label: <span className='' key={i}>Frequently Asked Questions</span>, children: <div className='flex flex-col justify-start items-start gap-2' key={i}>
                                    <p key={i}>
                                        Frequently given Answers Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia.
                                    </p>
                                </div>
                            }]}
                        />
                    })
                }
            </div>
            <p className='text-3xl font-medium text-center my-2'>Need More Help?</p>
            <div className='flex justify-center items-center gap-2 mt-4'>
                <img src={help_center} alt="" />
                <div>
                    <p className='text-xl'>Call Us (+1-212-456-7890)</p>
                    <p className='text-base'>Our help line service is active: 24/7</p>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter
