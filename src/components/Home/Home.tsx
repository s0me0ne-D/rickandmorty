import React, { useState } from 'react';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination/Pagination';
import { QueryParams } from '../../interfaces/queryParams';
import { Filters } from './Filters/Filters';

export const Home = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    currentPageNumber: 1,
    name: '',
    status: '',
  });
  const { data } = useGetCharactersQuery(queryParams);

  const handlePageNumber = (page: number) => {
    setQueryParams((prev) => ({ ...prev, currentPageNumber: page }));
  };
  return data ? (
    <main className="pb-5">
      <Filters updateQueryParams={setQueryParams} queryParams={queryParams} />
      <div className="max-w-screen-lg mt-5 m-auto pl-4 pr-4 flex flex-wrap  gap-2">
        {data.results.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      {data && (
        <Pagination
          currentPageNumber={queryParams.currentPageNumber}
          updatePageNumber={handlePageNumber}
          totalPages={data.info.pages}
        />
      )}
    </main>
  ) : null;
};
