import { baseApi } from "../States/baseApi";

const swapApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addToSwap: builder.mutation({
            query: (data) => {
                return {
                    url: '/swap/make-swap',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['swap'],
        }),
        getSwapHistory: builder.query({
            query: () => {
                return {
                    url: '/swap/swap-histoy',
                    method: 'GET',
                }
            },
            providesTags: ['swap'],
        }),
        getPendingSwap: builder.query({
            query: ({ status = 'receive_request' }) => {
                return {
                    url: '/swap/pending-swap',
                    method: 'GET',
                    params: { status }
                }
            },
            providesTags: ['swap'],
        }),

    }),
});
export const {
    useAddToSwapMutation,
    useGetSwapHistoryQuery,
    useGetPendingSwapQuery
} = swapApis;
