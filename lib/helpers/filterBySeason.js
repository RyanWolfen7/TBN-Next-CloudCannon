function filterBySeason(data, season) {
    const seasons = {};

    data.forEach((episode) => {
        const { season, ...rest } = episode;
        if (!seasons[season]) {
            seasons[season] = [];
        }
        seasons[season].push(rest);
    });

    const result = Object.keys(seasons).map((season) => ({
            season: parseInt(season),
            episodes: seasons[season],
        })).reverse()

    return result;
}

export default filterBySeason
