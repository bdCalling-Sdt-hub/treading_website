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
        fetchSmallBanner: builder.query({
            query: () => {
                return {
                    url: '/adds/get-small-banner',
                    method: 'GET',
                }
            },
            providesTags: ['banner'],
        }),

    }),
});
export const {
    useFetchBannerQuery,
    useFetchAboutQuery,
    useFetchRulesQuery,
    useFetchSmallBannerQuery
} = addApis;
