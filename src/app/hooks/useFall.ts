import { useEffect, useState } from "react";
import seasonData from "../data";
import { ISeason, ISeasonObject, ISeasonYear } from "../types/seasonTypes";

const adjustHour = (season: ISeason): number => {
  return season.tod === "pm" ? season.hour + 12 : season.hour;
};

const buildSeasonObject = (year: ISeasonYear): ISeasonObject => {
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

export default function useFall(): {
  fallEnd?: number;
  isFall?: boolean;
  isLoading?: boolean;
  nextFallStart?: number;
  season?: string;
} {
  const [utcTime, setUtcTime] = useState<number>(0);
  const [aprilFools, setAprilFools] = useState<boolean>(false);
  const [currentYearSeasons, setCurrentYearSeasons] = useState<ISeasonObject>({
    spring: 0,
    summer: 0,
    fall: 0,
    winter: 0,
  });
  const [nextYearSeasons, setNextYearSeasons] = useState<ISeasonObject>({
    spring: 0,
    summer: 0,
    fall: 0,
    winter: 0,
  });

  useEffect(() => {
    const year = new Date().getUTCFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const time = new Date().getTime();

    const thisYear = seasonData.find((x) => x.year === year) as ISeasonYear;
    const nextYear = seasonData.find((x) => x.year === year + 1) as ISeasonYear;

    const thisSeasons = buildSeasonObject(thisYear);
    const nextSeasons = buildSeasonObject(nextYear);

    setUtcTime(time);
    setAprilFools(month === 4 && day === 1);
    setCurrentYearSeasons(thisSeasons);
    setNextYearSeasons(nextSeasons);
  }, []);

  switch (currentYearSeasons.fall) {
    case 0:
      return { isLoading: true };
    default:
      return {
        fallEnd: currentYearSeasons.winter,
        isFall:
          (utcTime >= currentYearSeasons.fall &&
            utcTime < currentYearSeasons.winter) ||
          aprilFools,
        nextFallStart:
          utcTime < currentYearSeasons.fall
            ? currentYearSeasons.fall
            : nextYearSeasons.fall,
      };
  }
}
