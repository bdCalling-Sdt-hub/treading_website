import { baseApi } from "../States/baseApi";

const authApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: ({ data }) => {
                return {
                    url: '/auth/register',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['Auth'],
        }),
        resendActivationCode: builder.mutation({
            query: (email) => ({
                url: '/auth/resend-verify',
                method: 'POST',
                body: { email },
            }),
            invalidatesTags: ['Auth'],
        }),
        activateUser: builder.mutation({
            query: (activationData) => ({
                url: '/auth/activate-user',
                method: 'POST',
                body: activationData,
            }),
            invalidatesTags: ['Auth'],
        }),
        verifyUser: builder.mutation({
            query: (activationData) => ({
                url: '/auth/verify-otp',
                method: 'POST',
                body: activationData,
            }),
            invalidatesTags: ['Auth'],
        }),

        loginUser: builder.mutation({
            query: (loginData) => ({
                url: '/auth/login',
                method: 'POST',
                body: loginData,
            }),
            invalidatesTags: ['Auth'],
        }),

        forgotPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: { email },
            }),
            invalidatesTags: ['Auth'],
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'],
        }),
        resendOtp: builder.mutation({
            query: (email) => ({
                url: '/auth/resend-active',
                method: 'POST',
                body: { email },
            }),
            invalidatesTags: ['Auth'],
        }),

        fetchProfile: builder.query({
            query: () => {
                if (!localStorage.getItem('token')) {
                    return //console.log('token not found')
                }
                return {
                    url: '/auth/profile',
                    method: 'GET'
                }
            },
            providesTags: ['Auth'],
        }),
        fetchPartnerProfile: builder.query({
            query: (id) => {
                return {
                    url: `swap/partner_profile/${id}`,
                    method: 'GET'
                }
            },
            providesTags: ['Auth'],
        }),
        updateProfile: builder.mutation({
            query: (data) => {
                return {
                    url: 'auth/edit-profile',
                    method: 'PATCH',
                    body: data
                }
            },
            invalidatesTags: ['Auth'],
        })

    }),
});

export const {
    useRegisterUserMutation,
    useResendActivationCodeMutation,
    useActivateUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation,
    useFetchProfileQuery,
    useResendOtpMutation,
    useVerifyUserMutation,
    useResetPasswordMutation,
    useUpdateProfileMutation,
    useFetchPartnerProfileQuery
} = authApis;
