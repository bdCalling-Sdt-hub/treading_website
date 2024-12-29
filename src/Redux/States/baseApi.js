import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'TradingApp',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://138.197.37.38:5071",
        // mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ? JSON.parse((localStorage.getItem('token'))) : ""}`,
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Auth", 'category','message'],
})



export const imageUrl = (url) => {
    return url?.includes('http') ? url : `http://138.197.37.38:5071${url}`

}