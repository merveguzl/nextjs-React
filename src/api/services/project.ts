import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import { ProjectResponse } from "../models/project";

const getProjectData = (option?: RequestOption): Promise<ProjectResponse> => {
  const url = APIURLs.GET_PROJECT_DATA;

  return _request<ResponseModel<ProjectResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

export { getProjectData };
