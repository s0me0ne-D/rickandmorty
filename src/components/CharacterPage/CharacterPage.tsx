import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../redux/rickAndMortyApi';
import { Loader } from '../Loader';
import { Character } from './Character';

export const CharacterPage = () => {
  const id = useParams().characterId;
  const { data, isError, isFetching } = useGetCharacterByIdQuery(Number(id));

  /* eslint-disable */
  return (
    <div className="w-full mt-5">
      {isError ? (
        <div>Ooooops, something went wrong...</div>
      ) : isFetching ? (
        <Loader />
      ) : data ? (
        <div>
          <Character data={data} />
        </div>
      ) : null}
    </div>
  );
  /* eslint-enable */
};
