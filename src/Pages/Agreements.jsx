// import { Slider } from 'antd';
// import React, { useState } from 'react'
// import { FaCircleCheck } from 'react-icons/fa6';
// import { useFetchMyPlnQuery, useFetchSubscriptionPackageQuery } from '../Redux/Apis/subscriptionApis';

// const Agreements = () => {
//     const [value, setValue] = useState(100000);
//     const { data } = useFetchSubscriptionPackageQuery()
//     const { data: myPlan } = useFetchMyPlnQuery()
//     const formateData = transformData(data?.data || []);
//     console.log(formateData)
//     const min = 100000;
//     const max = 1000000;
//     const percentage = ((value - min) / (max - min)) * 100;
//     const handleChange = (event) => {
//         // setValue(event.target.value);
//     };
//     return (
//         <div id='assignment' className='py-8 container mx-auto bg-white my-10 rounded-md text-[#FEFEFE]'>
//             <div className='max-w-[850px] bg-[#FAA316] py-10 flex flex-col gap-4 justify-center items-center mx-auto rounded-md'>
//                 <img className='w-24 h-24 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1661346022749-36a54c0db868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
//                 <p className='text-2xl font-bold'>Mohammad Rakib</p>
//                 <p className='text-base'>Membership Status: Gold</p>
//                 <p className='text-lg font-medium'>Total Points Earn</p>
//                 <p className='text-3xl font-bold'>25,850</p>
//                 <div className='w-[80%] mx-auto py-6'>
//                     <div className="slider-container mx-auto">
//                         <div className="labels">
//                             <span className="label gold">Gold</span>
//                             <span className="label platinum">Platinum</span>
//                             <span className="label diamond">Diamond</span>
//                         </div>
//                         <input
//                             type="range"
//                             min={min}
//                             max={max}
//                             value={value}
//                             onChange={handleChange}
//                             className="slider"
//                             style={{
//                                 background: `linear-gradient(to right, #3475F1 0%, #3475F1 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`,
//                                 marginTop: '30px',
//                             }}
//                         />
//                         <div className="divider-container -mt-4">
//                             <div className="divider"></div>
//                             <div className="divider"></div>
//                         </div>
//                         <div className="values -mt-6">
//                             <span>100,000</span>
//                             <span>1 million</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-10 max-w-[650px] flex flex-col gap-4 justify-center items-center mx-auto rounded-md p-4 border text-[#4F4F4F] capitalize'>
//                 <p className='font-medium'>Monthly Subscription Fee </p>
//                 <p className='text-[#3475F1] text-3xl font-bold'>$19.99</p>
//                 <div className='w-[80%] text-left'>
//                     <div className=' px-4 box-border'>
//                         <p className='font-medium'>Your Membership Benefits:</p>
//                         {
//                             [...Array(4).keys()].map((item, i) => {
//                                 return <p className='flex justify-start items-center gap-1 my-1'>
//                                     <FaCircleCheck className='text-blue-500' /> Can exchange products
//                                 </p>
//                             })
//                         }
//                     </div>
//                     <button className='py-3 rounded-md mt-3 w-full bg-blue-500 text-white'>
//                         Pay Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Agreements

// function transformData(data) {
//     const dataCopy = [...data];
//     dataCopy.sort((a, b) => a.pointRangeEnd - b.pointRangeEnd);
//     const minPointRange = Math.min(...dataCopy.map(item => item.pointRangeStart));
//     const maxPointRange = Math.max(...dataCopy.map(item => item.pointRangeEnd));
//     const result = dataCopy.map(item => ({
//         planName: item.planName,
//         pointRangeStart: item.pointRangeStart,
//         pointRangeEnd: item.pointRangeEnd,
//     }));
//     // result.push({
//     //     minPointRange: minPointRange,
//     //     maxPointRange: maxPointRange
//     // });

//     return { data: result ,minPointRange,maxPointRange };
// }
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import {
  useFetchMyPlnQuery,
  useFetchSubscriptionPackageQuery,
} from "../Redux/Apis/subscriptionApis";
import { useUserData } from "../ContextProvider/UserDataProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import PaymentComponent from "../Components/Payment/PaymentComponent";
import { useConfirmPaymentMutation } from "../Redux/Apis/paymentApis";
import toast from "react-hot-toast";
import { imageUrl } from "../Redux/States/baseApi";
const Agreements = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [confirmPayment] = useConfirmPaymentMutation();
  const { user, isLoading, isFetching } = useUserData();
  const { data } = useFetchSubscriptionPackageQuery();
  const { data: myPlan } = useFetchMyPlnQuery();
  const [plan, setPlan] = useState({});
  const formattedData = transformData(data?.data?.subscriptions || []);
  const { minPointRange, maxPointRange, data: planData } = formattedData;
  const currentPlan =
    planData.find(
      (plan) =>
        user?.data?.result?.points >= plan.pointRangeStart &&
        user?.data?.result?.points <= plan.pointRangeEnd
    ) || {};

  const monthlyFee = currentPlan?.fee || "N/A";
  const percentage =
    ((user?.data?.result?.points - minPointRange) /
      (maxPointRange - minPointRange)) *
    100;
  useEffect(() => {
    if (!myPlan || !data) {
      return;
    }

    const filterData = data?.data?.subscriptions?.filter(
      (item) => item?._id === myPlan?.data?.plan_id?._id
    );
    setPlan(filterData?.[0]);
  }, [myPlan, data]);
  // console.log(myPlan)
  const benefit = [
    "Can exchange products",
    "Earn upto 1000 points by a single swap",
    "Exclusive offers",
    "Partner benefits",
  ];

  useEffect(() => {
    if ((!user || !user?.data?.result?._id) && (!isFetching || !isLoading)) {
      navigate("/sign-in", { state: { from: location?.pathname } });
    }
  }, [user, isFetching, isLoading, navigate, location]);

  const handlePayment = (data) => {
    // console.log(data)
    const formateData = {
      amount: Number(plan?.fee) || 0,
      user: user?.data?.result?._id,
      transaction_id: data?.paymentIntent?.id,
      plan_id: myPlan?.data?._id,
      package_id: myPlan?.data?.plan_id,
    };
    confirmPayment(formateData)
      .then((res) => {
        // console.log(res)
        toast.success(res?.data?.message);
        setOpenPaymentModal(false);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err)
        toast.error(err?.data?.message);
      });
  };

  return (
    <div
      id="assignment"
      className="py-8 container mx-auto bg-white my-10 rounded-md text-[#FEFEFE]"
    >
      <div className="max-w-[850px] bg-[#FAA316] py-10 flex flex-col gap-4 justify-center items-center mx-auto rounded-md">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={imageUrl(user?.data?.result?.profile_image)}
          alt=""
        />
        <p className="text-2xl font-bold">{user?.data?.result?.name}</p>
        <p className="text-base">
          Membership Status: {user?.data?.result?.userType}
        </p>
        <p className="text-lg font-medium">Total Points Earned</p>
        <p className="text-3xl font-bold">{user?.data?.result?.points}</p>

        {/* Slider Section */}
        <div className="w-[80%] mx-auto py-6">
          <div className="slider-container mx-auto">
            <div className="labels">
              {planData.map((plan, index) => (
                <span key={index} className="label">
                  {plan.planName}
                </span>
              ))}
            </div>
            <input
              type="range"
              min={minPointRange}
              max={maxPointRange}
              value={user?.data?.result?.points}
              className="slider"
              style={{
                background: `linear-gradient(to right, #3475F1 0%, #3475F1 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`,
                marginTop: "30px",
              }}
              disabled
            />
            <div className="divider-container -mt-4">
              {planData.map((plan, index) => (
                <div
                  key={index}
                  className="divider"
                  style={{
                    left: `${
                      ((plan.pointRangeStart - minPointRange) /
                        (maxPointRange - minPointRange)) *
                      100
                    }%`,
                  }}
                ></div>
              ))}
            </div>
            <div className="values -mt-6">
              <span>{minPointRange.toLocaleString()}</span>
              <span>{maxPointRange.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      {myPlan?.data && (
        <div className="mt-10 max-w-[650px] flex flex-col gap-4 justify-center items-center mx-auto rounded-md p-4 border text-[#4F4F4F] capitalize">
          <p className="font-medium">Monthly Subscription Fee</p>
          <p className="text-[#3475F1] text-3xl font-bold">
            {plan?.fee ? `$${plan?.fee}` : "your using a trial"}
          </p>
          <div className="w-[80%] text-left">
            <div className="px-4 box-border">
              <p className="font-medium">Your Membership Benefits:</p>
              {benefit.map((item, i) => (
                <p
                  className="flex justify-start items-center gap-2 my-2"
                  key={i}
                >
                  <FaCircleCheck className="text-blue-500" /> {item}
                </p>
              ))}
            </div>
            {myPlan?.data?.plan_type !== "Trial" ? (
              <button
                onClick={() => setOpenPaymentModal(true)}
                disabled={
                  myPlan?.data?.status === "pending" ||
                  myPlan?.data?.payment_status == "paid" ||
                  plan?.fee == 0
                }
                className="py-3 rounded-md mt-3 w-full disabled:bg-gray-400 bg-blue-500 text-white"
              >
                {myPlan?.data?.status === "pending"
                  ? "wait For Admins Approval"
                  : myPlan?.data?.payment_status == "paid"
                  ? "Already Paid For This Month"
                  : "Pay Now"}
              </button>
            ) : (
              <button
                disabled
                className="py-3 rounded-md mt-3 w-full disabled:bg-gray-400 bg-blue-500 text-white"
              >
                {myPlan?.data?.plan_type == "Trial" &&
                myPlan?.data?.status === "pending"
                  ? "wait For Admins Approval"
                  : "7 days free Trial"}
              </button>
            )}

            {
              <p className="text-center mt-5 px-8">
                Pay your subscription fee in time otherwise you may lose your
                points or downgrade your membership.
              </p>
            }
          </div>
        </div>
      )}

      <Modal
        open={openPaymentModal}
        onCancel={() => setOpenPaymentModal(false)}
        centered
        footer={false}
      >
        <PaymentComponent
          onPaymentSuccess={handlePayment}
          amount={Number(plan?.fee) || 0}
        />
      </Modal>
    </div>
  );
};

export default Agreements;

function transformData(data) {
  const dataCopy = [...data];
  dataCopy.sort((a, b) => a.pointRangeStart - b.pointRangeStart);

  const minPointRange = Math.min(
    ...dataCopy.map((item) => item.pointRangeStart)
  );
  const maxPointRange = Math.max(...dataCopy.map((item) => item.pointRangeEnd));

  const result = dataCopy.map((item) => ({
    planName: item.planName,
    pointRangeStart: item.pointRangeStart,
    pointRangeEnd: item.pointRangeEnd,
    fee: item.fee,
  }));

  return { data: result, minPointRange, maxPointRange };
}
