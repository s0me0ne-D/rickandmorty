import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Characters } from '../interfaces/rickAndMorty';
import { QueryParams } from '../interfaces/queryParams';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, QueryParams>({
      query: (query) =>
        `/?page=${query.currentPageNumber}&name=${query.name}&status=${query.status}&gender=${query.gender}`,
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
