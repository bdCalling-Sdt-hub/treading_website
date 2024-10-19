import { baseApi } from "../States/baseApi";

const productsApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: ({ limit = 50 }) => {
                return {
                    url: '/product/get-all',
                    method: 'GET',
                    params: { limit }
                }
            },
            providesTags: ['products'],
        }),
        fetchTopProducts: builder.query({
            query: () => {
                return {
                    url: '/product/get-top-products',
                    method: 'GET'
                }
            },
            providesTags: ['products'],
        }),
        fetchMyProducts: builder.query({
            query: () => {
                return {
                    url: '/product/my-products',
                    method: 'GET',
                    params: { limit: 99999 }
                }
            },
            providesTags: ['products'],
        }),
        fetchJustForMe: builder.query({
            query: () => {
                return {
                    url: '/product/just-for-you',
                    method: 'GET',
                    params: { limit: 99999 }
                }
            },
            providesTags: ['products'],
        }),
        fetchProductDetails: builder.query({
            query: (id) => {
                return {
                    url: `/product/details/${id}`,
                    method: 'GET',
                }
            },
            providesTags: ['products'],
        }),
        addProducts: builder.mutation({
            query: (data) => {
                return {
                    url: '/product/add-product',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['products'],
        }),

    }),
});

export const {
    useFetchTopProductsQuery,
    useFetchMyProductsQuery,
    useAddProductsMutation,
    useFetchJustForMeQuery,
    useFetchProductDetailsQuery,
    useFetchAllProductsQuery
} = productsApis;
