import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import { DashboardResponse } from "../models/dashboard";

const getDashboardAlert = (
  option?: RequestOption
): Promise<DashboardResponse> => {
  const url = APIURLs.GET_DASBOARD_DATA;

  return _request<ResponseModel<DashboardResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getDashboardAlert };
