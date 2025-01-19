import React from 'react'
import PaymentComponent from '../Components/Payment/PaymentComponent'
import { useFetchMyPlnQuery } from '../Redux/Apis/subscriptionApis';
import { useUserData } from '../ContextProvider/UserDataProvider';

const Payment = () => {
    const handlePayment = (data) => {
   
    }
    return (
        <div className=''>
            <div className='max-w-[500px] mx-auto'>
                <PaymentComponent onPaymentSuccess={handlePayment} amount={12} />
            </div>
        </div>
    )
}

export default Payment
