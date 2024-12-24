//rules/get-facts
import { baseApi } from "../States/baseApi";

const settingApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSwap: builder.query({
            query: () => {
                return {
                    url: '/rules/get-facts',
                    method: 'GET',
                }
            },
            providesTags: ['facts'],
        }),
        getTutorial: builder.query({
            query: () => {
                return {
                    url: '/adds/all-video-adds',
                    method: 'GET',
                }
            },
            providesTags: ['video'],
        }),
        getNotification: builder.query({
            query: () => {
                return {
                    url: '/notification/my-notifications',
                    method: 'GET',
                }
            },
            providesTags: ['notification'],
        }),

    }),
});
export const {
    useGetSwapQuery,
    useGetTutorialQuery,
    useGetNotificationQuery
} = settingApis;
