import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contribution } from '../../types/contribution'

// Define a service using a base URL and expected endpoints
export const contribututionsApi = createApi({
  reducerPath: 'contribututionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAllContributions: builder.query<Contribution[], void>({
      query: () => `contributions`,
    }),
  }),
})

export const { useGetAllContributionsQuery } = contribututionsApi