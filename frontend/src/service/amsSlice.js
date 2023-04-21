import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const amsSlice = createApi({
    reducerPath: "attendanceManagementSystem",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/ams" }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }),
        })
    }),
    // endpoints: (builder) => ({
    //     loginUser: builder.mutation({
    //         query: (user) => ({
    //             url: '/login',
    //             method: 'POST',
    //             body: user,
    //             headers: { 'Content-type': 'application/json; charset=UTF-8' }
    //         }),
    //     })
    // })
})

export const {
    useLoginUserMutation
} = amsSlice