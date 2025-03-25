import { APIURLs } from "../core/APIURLs";
import { _requestThirdParty } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import {
  GetDestinatinResponse,
  GetDestinationRequest,
  GetWeatherRequest,
  GetWeatherResponse,
} from "../models/weather";

const getWeather = (
  body: GetWeatherRequest,
  option?: RequestOption
): Promise<GetWeatherResponse> => {
  const url = APIURLs.GET_WEATHER;
  const replacementUrl = url
    .replace("latitudeValue", body.latitude.toString())
    .replace("longitudeValue", body.longitude.toString());
  return _requestThirdParty<ResponseModel<GetWeatherResponse>>({
    method: "GET",
    url: replacementUrl,
    body: body,
    ...option,
  }).then((res) => res.getData());
};

const getDestination = (
  body: GetDestinationRequest,
  option?: RequestOption
): Promise<GetDestinatinResponse> => {
  const url = APIURLs.GET_DESTINATION;
  const replacementUrl = url
    .replace("latitudeValue", body.latitude.toString())
    .replace("longitudeValue", body.longitude.toString())
    .replace("apiKey", body.apiKey.toString());
  return _requestThirdParty<ResponseModel<GetDestinatinResponse>>({
    method: "GET",
    url: replacementUrl,
    body: body,
    ...option,
  }).then((res) => res.getData());
};

export { getWeather, getDestination };
