import WeatherCard from "../../molecules/weatherCard/weatherCard.component";
import { getSeason } from "@/src/utils";
import { useQuery } from "@tanstack/react-query";
import { getDestination, getWeather } from "@/src/api/services/weather";
import LoadingState from "../../molecules/loadingState/loadingState";
import UserCard from "../../molecules/userCard/userCard.component";
import HomeAlert from "../../molecules/homeAlert/homeAlert.component";
import { getDashboardAlert } from "@/src/api/services/dashboard";

const getCurrentPosition = (): Promise<GeolocationCoordinates> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};

const HomeContainer = () => {
  const {
    data: weatherData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["getWeatherData"],
    queryFn: async (): Promise<any> => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position;
        window.console.log("latitude", latitude, longitude);
        return await getWeather({ latitude: latitude, longitude: longitude });
      } catch (error) {
        console.log("Konum alınamadı:", error);
        throw error;
      }
    },
  });

  const {
    data: destinationData,
    isErrorDestination,
    isLoadingDestination,
  } = useQuery({
    queryKey: ["getDestinationData"],
    queryFn: async (): Promise<any> => {
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

  const {
    data: dashboardAlertData,
    isErrorDashboardAlertData,
    isLoadingDashboardAlertData,
  } = useQuery({
    queryKey: ["getDashboardAlert"],
    queryFn: async (): Promise<any> => {
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
          {dashboardAlertData?.map((item, key) => (
            <HomeAlert key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
