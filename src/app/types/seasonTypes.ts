export type ISeason = {
  month: number;
  day: number;
  hour: number;
  minute: number;
  tod: string;
  zone: string;
};

export type ISeasonYear = {
  year: number;
  spring: ISeason;
  summer: ISeason;
  fall: ISeason;
  winter: ISeason;
};

export type ISeasonObject = {
  spring: number;
  summer: number;
  fall: number;
  winter: number;
};
