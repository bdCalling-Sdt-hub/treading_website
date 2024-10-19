import { baseApi } from "../States/baseApi";

const swapApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addToSwap: builder.mutation({
            query: (data) => {
                return {
                    url: '/swap/make-swap',
                    method: 'POST',
                    body:data
                }
            },
            providesTags: ['swap'],
        }),

    }),
});
export const {
    useAddToSwapMutation
} = swapApis;
