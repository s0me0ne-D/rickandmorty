import React, { useState } from 'react';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination/Pagination';
import { QueryParams } from '../../interfaces/queryParams';
import { Filters } from './Filters/Filters';
import { Loader } from '../Loader';

export const Home = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    currentPageNumber: 1,
    name: '',
    status: '',
    gender: '',
  });
  const { data, isError, isFetching } = useGetCharactersQuery(queryParams);

  const handlePageNumber = (page: number) => {
    setQueryParams((prev) => ({ ...prev, currentPageNumber: page }));
  };

  return (
    <main className="pb-5">
      <Filters updateQueryParams={setQueryParams} queryParams={queryParams} />
      {queryParams.name !== '' && (
        <h1 className="pl-4 mt-5 text-xl font-bold ">
          Search: {queryParams.name}
        </h1>
      )}
      {
        /* eslint-disable */
        isError ? (
          <div className="w-full flex justify-center">
            <span className="mt-5">Have no results</span>
          </div>
        ) : isFetching ? (
          <Loader />
        ) : data ? (
          <div className="max-w-screen-lg mt-5 m-auto pl-4 pr-4 flex flex-wrap justify-center  gap-2">
            {data!.results.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </div>
        ) : null
        /* eslint-enable */
      }
      {data && !isError && (
        <Pagination
          currentPageNumber={queryParams.currentPageNumber}
          updatePageNumber={handlePageNumber}
          totalPages={data!.info.pages}
        />
      )}
    </main>
  );
};
