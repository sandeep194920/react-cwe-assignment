import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contribution } from '../../types/contribution'

// API for async calls using Redux-Toolkit Query
export const contribututionsApi = createApi({
  reducerPath: 'contribututionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'http://cwe-node-app-env.eba-pbj4dp9b.ca-central-1.elasticbeanstalk.com',
  }),
  endpoints: (builder) => ({
    getAllContributions: builder.query<Contribution[], void>({
      query: () => `contributions`,
    }),
    deleteContribution: builder.mutation<void, Contribution>({
      query: (contribution) => ({
        url: `contribution/${contribution.uuid}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useGetAllContributionsQuery, useDeleteContributionMutation } =
  contribututionsApi
