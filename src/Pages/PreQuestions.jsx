import { Form, Input, Radio, Space } from 'antd'
import React, { useState } from 'react'

const PreQuestions = () => {
    const [value, setValue] = useState(1);
    const onFinish = (value) => {
console.log(value)
    }
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className='bg-white container mx-auto p-4 rounded-md mt-10 text-[#4E4E4E]'>
            <p className='text-3xl font-semibold'>Pre-Approval Questions</p>
            <Form className='flex flex-col justify-start items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item className='w-full'
                    label={<span>name</span>}
                    name={`name`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Date Of Birth</span>}
                    name={`dob`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='date' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Place of Birth</span>}
                    name={`pob`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='date' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>License No </span>}
                    name={`license `}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Passport</span>}
                    name={`passport`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='number ' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Email</span>}
                    name={`email`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='email' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Phone Number</span>}
                    name={`phone`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='text ' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>Profession</span>}
                    name={`profession`}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='text ' />
                </Form.Item>
                <Form.Item className='w-full'
                    label={<span>What’s your religion? (optional)</span>}
                    name={`religion `}
                    rules={[
                        {
                            required: true,
                            message: 'this field is required'
                        }
                    ]}
                >
                    <Input type='text ' />
                </Form.Item>
                <div className='w-full'>
                    <p>Travel Start</p>
                    <Form.Item
                        label={<span>Destination</span>}
                        name={`start_destination`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text ' />
                    </Form.Item>
                    <Form.Item
                        label={<span>state</span>}
                        name={`start_sate`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item
                        label={<span>County</span>}
                        name={`start_county`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item
                        label={<span>Country</span>}
                        name={`start_country`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                </div>
                <div className='w-full'>
                    <p>Travel End</p>
                    <Form.Item
                        label={<span>Destination</span>}
                        name={`end_destination `}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text ' />
                    </Form.Item>
                    <Form.Item
                        label={<span>state</span>}
                        name={`end_state`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item
                        label={<span>County</span>}
                        name={`end_county`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item
                        label={<span>Country</span>}
                        name={`end_country`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Input type='text' />
                    </Form.Item>
                </div>
                <div className='w-full'>
                    <Form.Item
                        label={<span>Do You Have Any Children</span>}
                        name={`children`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <>
                                <Radio value={`yes`}>YES</Radio>
                                <Radio value={`no`}>NO</Radio>
                            </>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label={<span>Do You Have Any Pets</span>}
                        name={`pets`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <>
                                <Radio value={`yes`}>YES</Radio>
                                <Radio value={`no`}>NO</Radio>
                            </>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label={<span>Do you own a vehicle?</span>}
                        name={`vehicle`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <>
                                <Radio value={`yes`}>YES</Radio>
                                <Radio value={`no`}>NO</Radio>
                            </>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label={<span>Are you willing to swap your vehicles?</span>}
                        name={`swap_vehicle`}
                        rules={[
                            {
                                required: true,
                                message: 'this field is required'
                            }
                        ]}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <>
                                <Radio value={`yes`}>YES</Radio>
                                <Radio value={`no`}>NO</Radio>
                            </>
                        </Radio.Group>
                    </Form.Item>
                </div>
                <div className='text-center col-span-3'>
                    <button className='px-10 py-3 bg-blue-600 text-white rounded-md'>
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default PreQuestions
