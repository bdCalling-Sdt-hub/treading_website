import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'TradingApp',
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://10.0.60.118:5071",
        baseUrl: "https://backend.swiftswapp.com",
        // baseUrl: "http://10.0.60.37:5071",
        // mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ? JSON.parse((localStorage.getItem('token'))) : ""}`,
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Auth", 'category', 'message', 'products', 'swap'],
})



export const imageUrl = (url) => {
    // return url?.includes('http') ? url : `http://10.0.60.37:5071${url}`
    // return url?.includes('http') ? url : `http://10.0.60.118:5071${url}`
    return url?.includes('http') ? url : `https://backend.swiftswapp.com${url}`

}