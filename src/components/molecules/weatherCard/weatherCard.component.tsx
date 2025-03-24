import { WeatherBanner } from "@/src/constants";
import { t } from "i18next";
import React from "react";

const WeatherCard = ({ season, weatherData, destinationData }) => {
  // Mevsime göre arka planı alıyoruz
  const backgroundImage =
    WeatherBanner[season]?.image || WeatherBanner.Spring.image;

  return (
    <div
      className="container bg-grey-lightest mx-auto shadow rounded  bg-cover relative"
      style={{
        color: "#606F7B",
        backgroundColor: "rgb(165, 182, 198)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-2 p-4 border-b border-grey-light text-center z-10">
        <span className="text-2xl font-thin">
          {destinationData?.results?.[0]?.components?.state}-
          {destinationData?.results?.[0]?.components?.town}
        </span>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className="flex justify-center z-10 "
      >
        <div className="text-center p-2">
          <div className="text-lg text-grey-light">
            <span className="text-center text-5xl text-white mx-6 font-thin">
              {weatherData?.current?.temperature_2m}˚
            </span>
          </div>
          <div className="text-lg text-grey-light">
            <span className="text-center text-xl text-white mx-6 font-thin">
              {t("wind_speed")} : {weatherData?.current?.wind_speed_10m}˚
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
