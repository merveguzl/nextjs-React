export enum WeatherEnum {
  Spring = "Spring",
  Winter = "Winter",
  Summer = "Summer",
  Autumn = "Autumn",
}

export const WeatherBanner = {
  [WeatherEnum.Spring]: {
    image:
      "https://i.pinimg.com/originals/c1/60/bb/c160bb331501d365626751acd3bc58e3.gif",
  },
  [WeatherEnum.Winter]: {
    image:
      "https://cdn.pixabay.com/animation/2022/11/08/06/19/06-19-11-383_512.gif",
  },
  [WeatherEnum.Summer]: {
    image:
      "https://i.pinimg.com/originals/4e/41/31/4e4131f140dde182ef9a6b35a0671964.gif",
  },
  [WeatherEnum.Autumn]: {
    image:
      "https://i.pinimg.com/originals/3b/d5/ca/3bd5ca9d4e95508ba99c46074a201523.gif",
  },
};
