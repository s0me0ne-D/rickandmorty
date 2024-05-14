import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Characters } from '../interfaces/rickAndMorty';
import { QueryParams } from '../interfaces/queryParams';
import { ICharacter } from '../interfaces/character';
import { IEpisode } from '../interfaces/episode';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, QueryParams>({
      query: (query) =>
        `character//?page=${query.currentPageNumber}&name=${query.name}&status=${query.status}&gender=${query.gender}`,
    }),
    getCharacterById: builder.query<ICharacter, number>({
      query: (id) => `character/${id}`,
    }),
    getEpisode: builder.query<IEpisode, number>({
      query: (episode) => `/episode/${episode}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetEpisodeQuery,
} = rickAndMortyApi;
