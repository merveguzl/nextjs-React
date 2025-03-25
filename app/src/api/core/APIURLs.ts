export const APIURLs = {
  GET_MENU: `Menu.json`,
  GET_EVENTS: `Events.json`,
  GET_WEATHER: `https://api.open-meteo.com/v1/forecast?latitude=latitudeValue&longitude=longitudeValue&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
  GET_DESTINATION: `https://api.opencagedata.com/geocode/v1/json?q=latitudeValue+longitudeValue&key=apiKey`,
  GET_DASBOARD_DATA: `DashboardAlert.json`,
  GET_PROJECT_DATA: `ProjectDetail.json`,
} as const;
