import { Form, Input } from 'antd'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import loginImage from '../assets/icon/loginImage.png'
import { Link, useNavigate } from 'react-router-dom'
import { useResetPasswordMutation } from '../Redux/Apis/authApis'
import toast from 'react-hot-toast'

const ResetPassword = () => {
    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState('password')
    const [cPasswordType, setCPasswordType] = useState('password')
    const [resetPassword, { isLoading }] = useResetPasswordMutation()
    const onFinish = (value) => {
        value.email = localStorage.getItem('email')
        resetPassword(value).unwrap().then(res => {
            toast.dismiss()
            toast.success(res?.message || 'Password Reset Successfully')
            localStorage.removeItem('email')
            localStorage.removeItem('token')
            navigate('/sign-in')
        }).catch(err => {
            toast.dismiss()
            toast.error(err?.data?.message || 'Something went wrong')
        })
    }
    return (
        <div className='h-screen w-full md:grid flex flex-col gap-4 md:gap-0 grid-cols-2 text-[#4E4E4E]'>
            <div className='w-full h-full flex flex-col justify-center items-center bg-white'>
                <div className='w-[320px] sm:w-[520px] md:w-[320px] lg:w-[500px]'>
                    <h3 className='text-4xl font-semibold '>Reset Your Password</h3>
                    <p className='pt-3 pb-6'>please insert you new password to reset your password</p>
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`newPassword`}
                            label={<span> Password</span>}
                            rules={[
                                {
                                    message: 'password field is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input type={passwordType} suffix={passwordType === 'text' ? <FaEye className='cursor-pointer text-xl' onClick={() => {
                                setPasswordType('password')
                            }} /> : <FaEyeSlash className='cursor-pointer text-xl' onClick={() => {
                                setPasswordType('text')
                            }} />} className='py-2' placeholder='input your password' />
                        </Form.Item>
                        <Form.Item
                            name={`confirmPassword`}
                            label={<span>Confirm Password</span>}
                            rules={[
                                {
                                    message: 'Confirm password field is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input type={cPasswordType} suffix={cPasswordType === 'text' ? <FaEye className='cursor-pointer text-xl' onClick={() => {
                                setCPasswordType('password')
                            }} /> : <FaEyeSlash className='cursor-pointer text-xl' onClick={() => {
                                setCPasswordType('text')
                            }} />} className='py-2' placeholder='input your password' />
                        </Form.Item>
                        {/* <div className='flex justify-between items-center gap-2'>
                            <Form.Item className=''
                                name={`remember`}
                            >
                                <label className='flex justify-start items-center gap-2 whitespace-nowrap ' htmlFor='checkbox'>
                                    <Input id='checkbox' type='checkbox' className='py-2' /> Remember password
                                </label>
                            </Form.Item>
                            <Link to={`/forget-password`} className='text-blue-500 -mt-5'>
                                forget password
                            </Link>
                        </div> */}
                        <button disabled={isLoading} className='w-full py-3 rounded-md bg-blue-500 text-white'>
                            {isLoading ? "Resting please wait" : " Reset Password"}
                        </button>
                    </Form>
                    {/* <p className='text-center mt-2'>Don’t have a account? <Link to={`/sign-up`} className='text-blue-500'>Sign Up</Link> </p> */}
                </div>
            </div>
            <div className='bg-[#ebf1fe] flex justify-center items-center'>
                <img src={loginImage} alt="" />
            </div>
        </div>
    )
}

export default ResetPassword
