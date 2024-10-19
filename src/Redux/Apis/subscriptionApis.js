///subscription/all
import { baseApi } from "../States/baseApi";

const subscriptionApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchSubscriptionPackage: builder.query({
            query: () => {
                return {
                    url: '/subscription/all',
                    method: 'GET'
                }
            },
            providesTags: ['category'],
        }),
        fetchMyPln: builder.query({
            query: () => {
                return {
                    url: '/plan/my-plan',
                    method: 'GET'
                }
            },
            providesTags: ['category'],
        }),
        fetchBuySubscriptionPackage: builder.mutation({
            query: (data) => {
                return {
                    url: '/plan/create-plan',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['category'],
        }),

    }),
});

export const {
    useFetchSubscriptionPackageQuery,
    useFetchBuySubscriptionPackageMutation,
    useFetchMyPlnQuery
} = subscriptionApis;
