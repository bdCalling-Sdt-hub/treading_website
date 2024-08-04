import { Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuImagePlus } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'

const AddProducts = () => {
    const [image, setImage] = useState([])
    const onFinish = (value) => {
        console.log(value)
    }
    return (
        <div className='container mx-auto mt-10 bg-white p-4'>
            <div className='flex justify-between items-center gap-2'>
                <p className='text-2xl font-semibold text-[#4E4E4E]'>Add Product</p>
                <Input className='w-44' prefix={<IoSearch />} placeholder='search here ....' />
            </div>
            <Form
                onFinish={onFinish}
                layout='vertical'
            >
                <div className='flex justify-start items-center gap-2 mt-6 flex-wrap'>
                    <Form.Item
                        name={`category`}
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-44' placeholder='choose a category' options={[
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                        ]} />
                    </Form.Item>
                    <Form.Item
                        name={`sub_category`}
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-44' placeholder='choose a sub category' options={[
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                        ]} />
                    </Form.Item>
                    <Form.Item
                        name={`location`}
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-44' placeholder='set a location' options={[
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                        ]} />
                    </Form.Item>
                </div>
                <div className='md:grid flex flex-col justify-start md:justify-center items-start md:items-center grid-cols-2 gap-4 md:gap-6'>
                    <Form.Item
                      className='w-full'
                        name={`category`}
                        label='Product Category'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Input className='pointer-events-none' placeholder='Product Category' />
                    </Form.Item>
                    <Form.Item
                        name={`sub_category`}
                          className='w-full'
                        label='Product Sub Category'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Input className='pointer-events-none' placeholder='Product sub Category' />
                    </Form.Item>
                    <Form.Item
                      className='w-full'
                        name={`title`}
                        label='Product Title'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Input className='' placeholder='Product title' />
                    </Form.Item>
                    <Form.Item
                    className='w-full'
                        name={`condition`}
                        label='Product Condition'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Input className='' placeholder='Product Condition' />
                    </Form.Item>
                    <Form.Item className='col-span-2 w-full'
                        name={`value`}
                        label='Product Value'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Input className='' placeholder='Product Value' />
                    </Form.Item>
                    <Form.Item className='col-span-2 w-full'
                        name={`desc`}
                        label='Product Description'
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <TextArea style={{
                            height: 200,
                            resize: 'none'
                        }} className='' placeholder='Product Description' />
                    </Form.Item>
                </div>
                <p>Add Product Image</p>
                <div className='flex justify-start items-center gap-2 p-2 border '>
                    {
                        image.map((item, i) => {
                            return <div className='w-[100px] h-[100px] flex-col flex justify-center items-center relative'>
                                <button type='button' onClick={() => {
                                    const newImages = image.filter((item, index) => index !== i)
                                    setImage(newImages)
                                    // set
                                }} className='text-2xl text-red-600 absolute top-1 right-1 bg-white rounded-full'>
                                    <RxCross2 />
                                </button>
                                <img src={URL.createObjectURL(item)} className='w-full h-full object-contain' alt="" />
                            </div>
                        })
                    }
                    <label htmlFor='image' className='w-[100px] h-[100px] flex-col flex justify-center items-center text-blue-500 border border-blue-500'>
                        <LuImagePlus className='text-2xl' />
                        <p>Add image</p>
                        <Input onChange={(e) => {
                            setImage([...image, ...e.target.files])
                        }} id='image' type='file' accept='image/*' multiple={true} style={{
                            display: 'none'
                        }} />
                    </label>
                </div>
            </Form>
        </div>
    )
}

export default AddProducts
