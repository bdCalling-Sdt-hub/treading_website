import { baseApi } from "../States/baseApi";

const categoryApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchCategorySubCategory: builder.query({
            query: () => {
                return {
                    url: '/sub-category/get-all',
                    method: 'GET'
                }
            },
            providesTags: ['category'],
        }),

    }),
});

export const {
    useFetchCategorySubCategoryQuery
} = categoryApis;
