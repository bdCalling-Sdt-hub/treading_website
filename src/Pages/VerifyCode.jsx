import { Form, Input } from 'antd'
import loginImage from '../assets/icon/loginImage.png'
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const VerifyCode = () => {
    const navigate = useNavigate()
    const onFinish = (value) => {
        navigate('/')
    }
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    return (
        <div className='h-screen w-full md:grid flex flex-col gap-4 md:gap-0 grid-cols-2 text-[#4E4E4E]'>
            <div className='w-full h-full flex flex-col justify-center items-center bg-white'>
                <div className='w-[320px] sm:w-[520px] md:w-[320px] lg:w-[500px]'>
                    <h3 className='text-4xl font-semibold '>Verification Code</h3>
                    <p className='pt-3 pb-6'>We send you a verification code to verify
                        your email.</p>
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`code`}
                            label={<span>Enter your code here</span>}
                            rules={[
                                {
                                    message: 'this field is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input.OTP length={4} onChange={onChange} />
                        </Form.Item>
                        <button className='w-fit px-10 py-3 rounded-md bg-blue-500 text-white'>
                            Sign in
                        </button>
                    </Form>
                </div>
            </div>
            <div className='bg-[#ebf1fe] flex justify-center items-center'>
                <img src={loginImage} alt="" />
            </div>
        </div>
    )
}


export default VerifyCode
