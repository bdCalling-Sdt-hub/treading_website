import { baseApi } from "../States/baseApi";

const chatApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getConversation: builder.query({
            query: (id) => ({
                url: `message/get-conversation/${id}`
            }),
            providesTags: ['conversation']
        }),
        getMessage: builder.query({
            query: (id) => ({
                url: `message/get-message/${id}?limit=9999999`
            }),
            providesTags: ['message']
        }),
        sendMessage: builder.mutation({
            query: ({ data }) => ({
                url: `message/send-message`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['message']
        }),
    })
})
export const {
    useGetConversationQuery,
    useGetMessageQuery,
    useSendMessageMutation
} = chatApis