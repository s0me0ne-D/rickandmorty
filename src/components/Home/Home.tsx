import React from 'react';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';
import { CharacterCard } from './CharacterCard';

export const Home = () => {
  const { data } = useGetCharactersQuery(1);
  return data ? (
    <main>
      <div className="max-w-screen-lg mt-5 m-auto pl-4 pr-4 flex flex-wrap  gap-2">
        {data.results.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </main>
  ) : null;
};
