import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";

const getProjectData = (option?: RequestOption): Promise<any> => {
  const url = APIURLs.GET_PROJECT_DATA;

  return _request<ResponseModel<any>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getProjectData };
