import { Form, Input } from 'antd'
import loginImage from '../assets/icon/loginImage.png'
import { useNavigate } from 'react-router-dom'
import { useActivateUserMutation, useResendOtpMutation } from '../Redux/Apis/authApis'
import toast from 'react-hot-toast'

const Otp = () => {
    const navigate = useNavigate()
    const [verifyCode, { isLoading }] = useActivateUserMutation()
    const onFinish = (value) => {
        const data = {
            userEmail: localStorage.getItem('email'),
            activation_code: value?.code
        }
        verifyCode(data).unwrap().then(res => {
            toast.dismiss()
            toast.success(res?.message || 'Verified Successfully')
            // localStorage.removeItem('email')
            navigate('/sign-in')
        }).catch(err => {
            toast.dismiss()
            toast.error(err?.data?.message || 'Something went wrong')
        })
        // navigate('/')
    }
    const onChange = (text) => {
    };
    //resend otp 
    const [sendOtp, { isLoading: sendingOtp }] = useResendOtpMutation()
    const handleResend = () => {
        sendOtp(localStorage.getItem('email')).unwrap().then(res => {
            toast.dismiss()
            toast.success(res?.message || 'Resend Otp Send Successfully')
        }).catch(err => {
            toast.dismiss()
            toast.error(err?.data?.message || 'Something went wrong')
        })
    }
    return (
        <div className='h-screen w-full md:grid flex flex-col gap-4 md:gap-0 grid-cols-2 text-[#4E4E4E]'>
            <div className='w-full h-full flex flex-col justify-center items-center bg-white'>
                <div className='w-[320px] sm:w-[520px] md:w-[320px] lg:w-[500px]'>
                    <h3 className='text-4xl font-semibold '>Verification Code</h3>
                    <p className='pt-3 pb-6'>We send you a verification code to verify
                        your email.</p>
                    <Form className='w-full'
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
                            <Input.OTP length={6} onChange={onChange} />
                        </Form.Item>
                        <p className='-mt-5 mb-2'>didn't received the code? <strong onClick={() => handleResend()} className='text-blue-500 cursor-pointer'>resend</strong></p>
                        <button disabled={isLoading} className='w-fit px-10 py-3 rounded-md bg-blue-500 text-white'>
                            {isLoading ? "Verifying please wait" : " Verify"}
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


export default Otp
