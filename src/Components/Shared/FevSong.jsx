import { Form, Input } from 'antd'
import React from 'react'

const FevSong = () => {
    const handleSave = (values) => {
        localStorage.setItem('song',values?.song)
        window.location.reload()
    }
    return (
        <Form onFinish={handleSave} layout='vertical' className='flex justify-between items-center gap-2 mt-3 max-w-[600px] mx-auto'>
            <Form.Item
            label={`favorite song`}
                name={`song`}
                className='w-full'
                rules={[
                    {
                        required: true,
                        message: 'please insert your favorite song link'
                    }
                ]}
            >
                <Input className='w-full' type='url' defaultValue={localStorage.getItem('song') || ''} placeholder='https://www.youtube.com/watch?v=fsgjKzO_X70' />
            </Form.Item>
            <Form.Item>
                <button className='bg-blue-400 px-3 py-[5px] rounded-md text-white mt-7'>
                    Save
                </button>
            </Form.Item>
        </Form>
    )
}

export default FevSong
