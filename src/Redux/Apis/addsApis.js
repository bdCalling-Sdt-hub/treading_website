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
        fetchAbout: builder.query({
            query: () => {
                return {
                    url: '/rules/get-about-us',
                    method: 'GET',
                    params: { limit: 99999 }
                }
            },
            providesTags: ['about'],
        }),
        fetchRules: builder.query({
            query: () => {
                return {
                    url: '/rules/get-rules',
                    method: 'GET',
                    params: { limit: 99999 }
                }
            },
            providesTags: ['about'],
        }),

    }),
});
export const {
    useFetchBannerQuery,
    useFetchAboutQuery,
    useFetchRulesQuery
} = addApis;
