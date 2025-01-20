import { baseApi } from "../States/baseApi";

const ratingsApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyRating: builder.query({
            query: () => `/review/my-reviews`
        }),
        addReview: builder.mutation({
            query: (data) => ({
                url: 'review/send',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['swap']
        })
    })
})
export const {
    useGetMyRatingQuery,
    useAddReviewMutation
} = ratingsApis