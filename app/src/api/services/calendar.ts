import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import { CalenderResponse } from "../models/calendar";

const getEvents = (option?: RequestOption): Promise<CalenderResponse> => {
  const url = APIURLs.GET_EVENTS;

  return _request<ResponseModel<CalenderResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getEvents };
