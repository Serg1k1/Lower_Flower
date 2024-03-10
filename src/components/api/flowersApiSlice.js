import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flowersApiSlice = createApi({
    reducerPath: "flowersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: builder => ({
        getAllFlowers: builder.query({
            query: () => "/flowers",

            // transformResponse: (response) => {
            //     const filteredFlowers = response.filter((item) => item.popular === 'true');
            //     return filteredFlowers.slice(0, 12);
            // }
        }),
    })
})

export const { useGetAllFlowersQuery } = flowersApiSlice;