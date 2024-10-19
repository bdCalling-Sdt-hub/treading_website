import { Form, Input } from 'antd'
import loginImage from '../assets/icon/loginImage.png'
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForgotPasswordMutation } from '../Redux/Apis/authApis'
import toast from 'react-hot-toast'
const ForgetPassword = () => {
    const [sendOtp, { isLoading }] = useForgotPasswordMutation()
    const navigate = useNavigate()
    const onFinish = (value) => {
        sendOtp(value?.email).unwrap().then(res => {
            //console.log(res)
            localStorage.setItem('email', value?.email)
            toast.dismiss()
            toast.success(res?.message || 'Otp send Successfully')
            navigate('/otp')
        }).catch(err => {
            //console.log(err)
            toast.dismiss()
            toast.error(err?.data?.message || 'Something went wrong')
        })
    }
    return (
        <div className='h-screen w-full md:grid flex flex-col gap-4 md:gap-0 grid-cols-2 text-[#4E4E4E]'>
            <div className='w-full h-full flex flex-col justify-center items-center bg-white'>
                <div className='w-[320px] sm:w-[520px] md:w-[320px] lg:w-[500px]'>
                    <h3 className='text-4xl font-semibold '>Forgot Password?</h3>
                    <p className='pt-3 pb-6'>Enter your email and we will send you a
                        verification code</p>
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`email`}
                            label={<span>Email</span>}
                            rules={[
                                {
                                    message: 'this field is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input prefix={<MdOutlineEmail />} type='email' className='py-2' placeholder='input your email' />
                        </Form.Item>
                        <button className='w-full py-3 rounded-md bg-blue-500 text-white'>
                            {isLoading ? "Loading please wait" : " Send Otp"}
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

export default ForgetPassword
