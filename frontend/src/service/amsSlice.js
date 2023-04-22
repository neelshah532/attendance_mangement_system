import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const amsSlice = createApi({
    reducerPath: "attendanceManagementSystem",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/ams" }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        updateEmployee: builder.mutation({
            query: (details) => ({
                url: '/admin/manageEmployee/update',
                method: 'PUT',
                body: details,
            }),
        }),
        getAllEmployees: builder.query({
            query: () => '/employees/Teaching',
        }),
        getAllDetailsEmployees: builder.query({
            query: (id) => `/employees/getEmployeeProfile/${id}`,
        }),

    }),
})

export const {
    useLoginMutation,
    useGetAllEmployeesQuery,
    useGetAllDetailsEmployeesQuery,
    useUpdateEmployeeMutation
} = amsSlice