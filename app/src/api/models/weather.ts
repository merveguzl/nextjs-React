export type GetWeatherRequest = {
  latitude: number | string;
  longitude: number | string;
};

export type GetWeatherResponse = {
  current: {
    wind_speed_10m: string;
    temperature_2m: string;
  };
};

export type GetDestinationRequest = {
  latitude: number | string;
  longitude: number | string;
  apiKey: string;
};

export type GetDestinatinResponse = {
  results: {
    components: {
      state: string;
      town: string;
    };
  }[];
};
