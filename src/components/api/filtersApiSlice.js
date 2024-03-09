import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filtersApiSlice = createApi({
    reducerPath: "filtersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: builder => ({
        getAllCatalog: builder.query({
            query: () => "/catalog"
        }),
        getAllBouquets: builder.query({
            query: () => "/bouquet"
        })
    })
})

export const { useGetAllCatalogQuery, useGetAllBouquetsQuery } = filtersApiSlice;