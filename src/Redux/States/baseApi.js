import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'TradingApp',
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://192.168.12.102:5071",
        baseUrl: "https://backend.swiftswapp.com",
        // mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ? JSON.parse((localStorage.getItem('token'))) : ""}`,
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Auth", 'category', 'message'],
})



export const imageUrl = (url) => {
    // return url?.includes('http') ? url : `http://192.168.12.102:5071${url}`
    return url?.includes('http') ? url : `https://backend.swiftswapp.com${url}`

}