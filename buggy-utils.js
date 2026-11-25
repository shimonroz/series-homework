export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id === Number(idText));

export const addEpisodeToFirstSeason = (show, episode) => 
({
  ...show,
  seasons: show.seasons.map((s, i) =>
    i === 0 ? { ...s, episodes: [...s.episodes, episode] } : s)
});