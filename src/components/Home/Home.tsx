import React, { useState } from 'react';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination/Pagination';

export const Home = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const { data } = useGetCharactersQuery(currentPageNumber);
  return data ? (
    <main className="pb-5">
      <div className="max-w-screen-lg mt-5 m-auto pl-4 pr-4 flex flex-wrap  gap-2">
        {data.results.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      {data && (
        <Pagination
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          totalPages={data.info.pages}
        />
      )}
    </main>
  ) : null;
};
