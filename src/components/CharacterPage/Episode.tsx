import React from 'react';
import { hanleEpisode } from '../../utils/handleEpisode';
import { useGetEpisodeQuery } from '../../redux/rickAndMortyApi';

export const Episode = ({ episodeUrl }: { episodeUrl: string }) => {
  const episodeNumber = hanleEpisode(episodeUrl);
  const { data } = useGetEpisodeQuery(episodeNumber);
  return data ? <div>{data.name}</div> : null;
};
