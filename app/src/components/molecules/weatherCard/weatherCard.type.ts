import {
  GetDestinatinResponse,
  GetWeatherResponse,
} from "@/app/src/api/models/weather";
import { WeatherBanner } from "@/app/src/constants";

export type WeatherCardProps = {
  season: keyof typeof WeatherBanner;
  weatherData?: GetWeatherResponse;
  destinationData?: GetDestinatinResponse;
};
