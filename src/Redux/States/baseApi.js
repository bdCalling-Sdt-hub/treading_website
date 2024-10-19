import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'TradingApp',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.10.152:5070",
        // mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ? JSON.parse((localStorage.getItem('token'))) : ""}`,
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Auth", 'category',],
})



export const imageUrl = (url) => {
    return url?.includes('http') ? url : `http://192.168.10.152:5070${url}`

}