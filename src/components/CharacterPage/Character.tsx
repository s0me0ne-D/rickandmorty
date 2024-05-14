import React from 'react';
import { ICharacter } from '../../interfaces/character';
import { Episode } from './Episode';

interface CharacterProps {
  data: ICharacter;
}

export const Character = ({ data }: CharacterProps) => {
  return (
    <div className="w-fit p-3 m-auto border-solid border-2  border-gray-600">
      <img className="max-w-fit" src={data.image} alt="character" />
      <ul className="flex flex-col gap-3 mt-2">
        <li>
          <span className="list-title">Name:</span> {data.name}
        </li>
        <li>
          <span className="list-title">Gender:</span> {data.gender}
        </li>
        <li>
          <span className="list-title">Status:</span> {data.status}
        </li>
        <li>
          <span className="list-title">Species:</span> {data.species}
        </li>
        <li>
          <span className="list-title">Origin:</span> {data.origin.name}
        </li>
        <div>
          <span className="list-title">Episodes:</span>
          {data.episode && (
            <ul className="mt-2 flex flex-col gap-1">
              {data.episode.map((episode) => (
                <li key={episode}>
                  <Episode episodeUrl={episode} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
};
