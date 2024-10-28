import { baseApi } from "../States/baseApi";
const paymentApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
            query: (data) => {
                return {
                    url: 'payment/payment-intent',
                    method: 'POST',
                    body: data
                }
            },
            providesTags: ['swap'],
        }),
        confirmPayment: builder.mutation({
            query: (data) => {
                return {
                    url: 'payment/success_intent',
                    method: 'POST',
                    body: data
                }
            },
            providesTags: ['swap'],
        }),

    }),
});
export const {
    useCreatePaymentIntentMutation,
    useConfirmPaymentMutation
} = paymentApis;
