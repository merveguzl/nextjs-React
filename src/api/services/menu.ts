import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import { MenuResponse } from "../models/menu";

const getMenu = (option?: RequestOption): Promise<MenuResponse> => {
  const url = APIURLs.GET_MENU;

  return _request<ResponseModel<MenuResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getMenu };
