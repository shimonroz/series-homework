import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";
import { writeFileSync } from "node:fs";

const {platform, series} = loadData();

const season = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
};
const seriesUp = addSeason(series, 5, season);   // ל־Desert Signal יש עכשיו עונה אחת

writeFileSync(
  "series-updated.json",
  JSON.stringify({ platform, series: seriesUp }, null, 2)
);