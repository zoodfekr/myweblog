import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerUrl } from '@/services/server';

export const api = createApi({

    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: ServerUrl }),

    tagTypes: [],


    endpoints: (builder) => ({


        getPosts: builder.query({
            query: () => '/posts',
        }),


    }),
});

export const { useGetPostsQuery } = api;
