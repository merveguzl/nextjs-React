import { WeatherEnum } from "../constants";

export const getSeason = () => {
  const currentMonth = new Date().getMonth();
  if (currentMonth >= 2 && currentMonth <= 4) {
    return WeatherEnum.Spring;
  } else if (currentMonth >= 5 && currentMonth <= 7) {
    return WeatherEnum.Summer;
  } else if (currentMonth >= 8 && currentMonth <= 10) {
    return WeatherEnum.Autumn;
  } else {
    return WeatherEnum.Winter;
  }
};
