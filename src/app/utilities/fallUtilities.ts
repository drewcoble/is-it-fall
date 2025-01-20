import seasonData from "../data";
import { ISeason, ISeasonObject, ISeasonYear } from "../types/seasonTypes";

const adjustHour = (season: ISeason): number => {
  return season.tod === "pm" ? season.hour + 12 : season.hour;
};

export const buildSeasonObject = (year: ISeasonYear): ISeasonObject => {
  const springAdjustedHour = adjustHour(year.spring);
  const summerAdjustedHour = adjustHour(year.summer);
  const fallAdjustedHour = adjustHour(year.fall);
  const winterAdjustedHour = adjustHour(year.winter);

  return {
    spring: Date.UTC(
      year.year,
      year.spring.month,
      year.spring.day,
      springAdjustedHour,
      year.spring.minute
    ),
    summer: Date.UTC(
      year.year,
      year.summer.month,
      year.summer.day,
      summerAdjustedHour,
      year.summer.minute
    ),
    fall: Date.UTC(
      year.year,
      year.fall.month,
      year.fall.day,
      fallAdjustedHour,
      year.fall.minute
    ),
    winter: Date.UTC(
      year.year,
      year.winter.month,
      year.winter.day,
      winterAdjustedHour,
      year.winter.minute
    ),
  };
};

export const getSeasons = (year: number) => {
  const thisYear = seasonData.find((x) => x.year === year) as ISeasonYear;
  const nextYear = seasonData.find((x) => x.year === year + 1) as ISeasonYear;

  const thisYearSeasons = buildSeasonObject(thisYear);
  const nextYearSeasons = buildSeasonObject(nextYear);

  return { nextYearSeasons, thisYearSeasons };
};

export const getFall = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = date.getTime();

  const isAprilFools = month === 4 && day === 1;

  const { nextYearSeasons, thisYearSeasons } = getSeasons(year);

  return {
    fallEnd: thisYearSeasons.winter,
    isFall:
      (time >= thisYearSeasons.fall && time < thisYearSeasons.winter) ||
      isAprilFools,
    // nextFallStart: 10000,
    nextFallStart:
      time < thisYearSeasons.fall ? thisYearSeasons.fall : nextYearSeasons.fall,
  };
};
