export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => 
        show.seasons[seasonIndex]?.episodes[episodeIndex].title ?? "No episode";

export const getLastSeasonNumber = (show) => 
        show.seasons.length === 0 ? 0 : show.seasons?.at(-1).number;

export const getNextSeasonYear = (show) => 
        show.nextSeason?.year ?? "No announcement";

export const getById = (series, id) =>
        series.find(i => i.id == id)

export const getSeasonsCount = (series) =>
        series.map(item => ({title: item.title, seasons: item.seasons.length}));

export const hasTopEpisode = (show, minRating) =>
        show.seasons.some(item => item.episodes.some(rate => rate.rating >= minRating));

export const getCreatorsFrom = (series, country) =>
        series.filter(item => item.creator.country == country).map(i => i.creator.name);
    
export const sortByStartYear = (series) =>
        [...series].sort((a, b) => a.startYear - b.startYear);
          
