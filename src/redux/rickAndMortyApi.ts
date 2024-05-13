import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Characters } from '../interfaces/rickAndMorty';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, number>({
      query: (page) => `/?page=${page}`,
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
