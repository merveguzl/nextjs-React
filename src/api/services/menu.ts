import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";

const getMenu = (option?: RequestOption): Promise<any> => {
  const url = APIURLs.GET_MENU;

  return _request<ResponseModel<any>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getMenu };
