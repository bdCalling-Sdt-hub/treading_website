import { baseApi } from "../States/baseApi";

const addApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchBanner: builder.query({
            query: () => {
                return {
                    url: '/adds/all-adds',
                    method: 'GET',
                    params: { limit: 99999 }
                }
            },
            providesTags: ['banner'],
        }),

    }),
});
export const {
    useFetchBannerQuery
} = addApis;
