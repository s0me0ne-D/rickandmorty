export const hanleEpisode = (episodeUrl: string) => {
  const episodeUrlArr = episodeUrl.split('/');
  const episodeNumber = +episodeUrlArr[episodeUrlArr.length - 1];

  return episodeNumber;
};
