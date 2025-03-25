import WeatherCard from "../../molecules/weatherCard/weatherCard.component";
import { getSeason } from "@/app/src/utils";
import { useQuery } from "@tanstack/react-query";
import { getDestination, getWeather } from "@/app/src/api/services/weather";
import LoadingState from "../../molecules/loadingState/loadingState";
import UserCard from "../../molecules/userCard/userCard.component";
import HomeAlert from "../../molecules/homeAlert/homeAlert.component";
import { getDashboardAlert } from "@/app/src/api/services/dashboard";
import { DashboardResponse } from "@/app/src/api/models/dashboard";
import {
  GetDestinatinResponse,
  GetWeatherResponse,
} from "@/app/src/api/models/weather";

const getCurrentPosition = (): Promise<GeolocationCoordinates> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};

const HomeContainer = () => {
  const { data: weatherData, isLoading } = useQuery({
    queryKey: ["getWeatherData"],
    queryFn: async (): Promise<GetWeatherResponse> => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position;
        return await getWeather({ latitude: latitude, longitude: longitude });
      } catch (error) {
        console.log("Konum alınamadı:", error);
        throw error;
      }
    },
  });

  const { data: destinationData, isLoading: isLoadingDestination } = useQuery({
    queryKey: ["getDestinationData"],
    queryFn: async (): Promise<GetDestinatinResponse> => {
      try {
        const apiKey = "6eba70dfe1604b28ad8be16552223abf";

        const position = await getCurrentPosition();
        const { latitude, longitude } = position;
        return await getDestination({
          latitude: latitude,
          longitude: longitude,
          apiKey: apiKey,
        });
      } catch (error) {
        throw error;
      }
    },
  });

  const { data: dashboardAlertData, isLoading: isLoadingDashboardAlertData } =
    useQuery({
      queryKey: ["getDashboardAlert"],
      queryFn: async (): Promise<DashboardResponse> => {
        return await getDashboardAlert();
      },
    });

  const season = getSeason();

  if (isLoading || isLoadingDestination || isLoadingDashboardAlertData) {
    return <LoadingState />;
  }

  return (
    <div>
      <WeatherCard
        season={season}
        weatherData={weatherData}
        destinationData={destinationData}
      />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <UserCard />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mt-4 sm:w-full md:w-1/2 lg:w-1/3">
          {dashboardAlertData ? (
            dashboardAlertData?.map((item, key) => (
              <HomeAlert key={key} item={item} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
