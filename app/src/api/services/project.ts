import { ConvertProjectItemData } from "../../components/pages/project/project.type";
import { APIURLs } from "../core/APIURLs";
import { _request } from "../core/request";
import { RequestOption } from "../core/requestOptions";
import { ResponseModel } from "../core/responseModel";
import {
  DeleteProjectListItem,
  ProjectListResponse,
  ProjectResponse,
} from "../models/project";

const getProjectData = (option?: RequestOption): Promise<ProjectResponse> => {
  const url = APIURLs.GET_PROJECT_DATA;

  return _request<ResponseModel<ProjectResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

const getProjectList = (
  option?: RequestOption
): Promise<ProjectListResponse> => {
  const url = APIURLs.GET_PROJECT_LIST;

  return _request<ResponseModel<ProjectListResponse>>({
    method: "GET",
    url: url,
    ...option,
  }).then((res) => res.getData());
};

const postProjectList = (
  body: ConvertProjectItemData,
  option?: RequestOption
): Promise<ProjectListResponse> => {
  const url = APIURLs.GET_PROJECT_LIST;

  return _request<ResponseModel<ProjectListResponse>>({
    method: "POST",
    url: url,
    body,
    ...option,
  }).then((res) => res.getData());
};

const deleteProjectListItem = (
  body: DeleteProjectListItem,
  option?: RequestOption
): Promise<ProjectListResponse> => {
  const url = APIURLs.DELETE_PROJECT_LIST.replace("item", body.id);

  return _request<ResponseModel<ProjectListResponse>>({
    method: "DELETE",
    url: url,
    body,
    ...option,
  }).then((res) => res.getData());
};

export {
  getProjectData,
  getProjectList,
  postProjectList,
  deleteProjectListItem,
};
