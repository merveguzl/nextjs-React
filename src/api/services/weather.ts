import { APIURLs } from "../core/APIURLs";
import { _requestThirdParty } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";

const getWeather = (body: any, option?: RequestOption): Promise<any> => {
  const url = APIURLs.GET_WEATHER;
  const replacementUrl = url
    .replace("latitudeValue", body.latitude.toString())
    .replace("longitudeValue", body.longitude.toString());
  return _requestThirdParty<ResponseModel<any>>({
    method: "GET",
    url: replacementUrl,
    body: body,
    ...option,
  }).then((res) => res.getData());
};

const getDestination = (body: any, option?: RequestOption): Promise<any> => {
  const url = APIURLs.GET_DESTINATION;
  const replacementUrl = url
    .replace("latitudeValue", body.latitude.toString())
    .replace("longitudeValue", body.longitude.toString())
    .replace("apiKey", body.apiKey.toString());
  return _requestThirdParty<ResponseModel<any>>({
    method: "GET",
    url: replacementUrl,
    body: body,
    ...option,
  }).then((res) => res.getData());
};

export { getWeather, getDestination };
