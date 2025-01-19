import { Checkbox, Empty, Form, Input, Modal } from "antd";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLocationDot } from "react-icons/fa6";
import loginImage from "../assets/icon/loginImage.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLock, CiUser } from "react-icons/ci";
import { useRegisterUserMutation } from "../Redux/Apis/authApis";
import toast from "react-hot-toast";
import { useFetchRulesQuery } from "../Redux/Apis/addsApis";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const { data } = useFetchRulesQuery();
  const onFinish = (value) => {
    if (!isCheck) return toast.error("please agree with terms and conditions");
    registerUser({ data: value })
      .unwrap()
      .then((res) => {
        localStorage.setItem("email", value?.email);
        toast.dismiss();
        toast.success(res?.message || "Registered Successfully");
        navigate("/otp");
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss();
        toast.error(err?.data?.message || "Something went wrong");
      });
  };
  return (
    <div className="h-screen w-full md:grid flex flex-col gap-4 md:gap-0 grid-cols-2 text-[#4E4E4E]">
      <div className="w-full h-full flex flex-col justify-center items-center bg-white">
        <div className="w-[320px] sm:w-[520px] md:w-[320px] lg:w-[500px]">
          <h3 className="text-4xl font-semibold ">Sign Up</h3>
          <p className="pt-3 pb-6">Just a few quick things to get started</p>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name={`firstName`}
              label={<span>First Name</span>}
              rules={[
                {
                  message: "first Name field is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<CiUser />}
                type="text"
                className="py-2"
                placeholder="input your first Name"
              />
            </Form.Item>
            <Form.Item
              name={`lastName`}
              label={<span>Last Name</span>}
              rules={[
                {
                  message: "last Name field is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<CiUser />}
                type="text"
                className="py-2"
                placeholder="input your Last Name"
              />
            </Form.Item>
            <Form.Item
              name={`email`}
              label={<span>Email</span>}
              rules={[
                {
                  message: "Email field is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<MdOutlineEmail />}
                type="email"
                className="py-2"
                placeholder="input your Email"
              />
            </Form.Item>
            <Form.Item
              name={`phone_number`}
              label={<span>Phone Number</span>}
              rules={[
                {
                  message: "Phone Number field is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<FiPhone />}
                type="text"
                className="py-2"
                placeholder="input your phone number"
              />
            </Form.Item>
            {/* <Form.Item
              name={`address`}
              label={<span>Address (Optional)</span>}
              rules={[
                {
                  message: "Address field is required",
                  required: false,
                },
              ]}
            >
              <Input
                prefix={<FaLocationDot />}
                type="text"
                className="py-2"
                placeholder="input your address"
              />
            </Form.Item> */}
            <Form.Item
              name={`password`}
              label={<span>password</span>}
              rules={[
                {
                  message: "password field is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<CiLock />}
                type={passwordType}
                suffix={
                  passwordType === "text" ? (
                    <FaEye
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        setPasswordType("password");
                      }}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        setPasswordType("text");
                      }}
                    />
                  )
                }
                className="py-2"
                placeholder="input your password"
              />
            </Form.Item>
            <Form.Item
              name={`confirmPassword`}
              label={<span>confirm password</span>}
              rules={[
                {
                  message: "confirm password is required",
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<CiLock />}
                type={confirmPasswordType}
                suffix={
                  confirmPasswordType === "text" ? (
                    <FaEye
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        setConfirmPasswordType("password");
                      }}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        setConfirmPasswordType("text");
                      }}
                    />
                  )
                }
                className="py-2"
                placeholder="input your password"
              />
            </Form.Item>
            <div className="flex justify-between items-center gap-2">
              <Form.Item className="" name={`remember`}>
                <label
                  className="flex justify-start items-center gap-2 whitespace-nowrap "
                  htmlFor="checkbox"
                >
                  <Checkbox
                    onClick={() => setIsCheck(!isCheck)}
                    checked={isCheck}
                    id="checkbox"
                    type="checkbox"
                    className="py-2"
                  />{" "}
                  agree terms and condition
                </label>
              </Form.Item>
              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                }}
                className="text-blue-500 -mt-5"
              >
                see terms & conditions
              </button>
            </div>
            <button
              disabled={isLoading}
              className="w-full py-3 rounded-md bg-blue-500 text-white"
            >
              {isLoading ? "Loading please wait" : " Sign Up"}
            </button>
          </Form>
          <p className="text-center mt-2">
            Don’t have a account?{" "}
            <Link to={`/sign-in`} className="text-blue-500">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="bg-[#ebf1fe] flex justify-center items-center">
        <img src={loginImage} alt="" />
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        centered
        width={1000}
      >
        <div
          className="container mx-auto my-5"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>
      </Modal>
    </div>
  );
};

export default Register;
