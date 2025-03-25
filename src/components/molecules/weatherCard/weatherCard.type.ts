import {
  GetDestinatinResponse,
  GetWeatherResponse,
} from "@/src/api/models/weather";
import { WeatherBanner } from "@/src/constants";

export type WeatherCardProps = {
  season: keyof typeof WeatherBanner;
  weatherData?: GetWeatherResponse;
  destinationData?: GetDestinatinResponse;
};
