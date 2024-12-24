import { baseApi } from "../States/baseApi";

const ratingsApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyRating: builder.query({
            query: () => `/review/my-reviews`
        })
    })
})
export const {
useGetMyRatingQuery
} = ratingsApis