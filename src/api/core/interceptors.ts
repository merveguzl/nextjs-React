import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { RequestOption } from "./requestOptions";
import { ErrorInfo, ResponseModel } from "./responseModel";

// eslint-disable-next-line @typescript-eslint/no-require-imports
global.Buffer = global.Buffer || require("buffer").Buffer;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config as AxiosRequestConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = <T>(response: AxiosResponse): ResponseModel<T> => {
  return new ResponseModel(response);
};

const BadRequestErrorHandle = (error: AxiosError<{ errors: object }>) => {
  return Promise.reject(error);
};

const onResponseError = async (
  error: AxiosError<{ error: ErrorInfo; errors: object }>,
  option: RequestOption
): Promise<void | AxiosError<ErrorInfo>> => {
  if (option.signalController && error.name === "CanceledError") {
    return;
  }

  const errorResponse = error?.response;

  const defaultErrorLogic = () => {
    return Promise.reject(error);
  };

  try {
    switch (errorResponse?.status) {
      case 400:
        return BadRequestErrorHandle(error);
      case 401:
        break;
      case 403:
        break;
      default:
        return defaultErrorLogic();
    }
  } catch {
    return defaultErrorLogic();
  }
};

export function setupInterceptors<T>(
  axiosInstance: AxiosInstance,
  option: RequestOption
): AxiosInstance {
  axiosInstance.interceptors.request.use(
    (request) => onRequest(request) as never,
    (request) => onRequestError(request)
  );
  axiosInstance.interceptors.response.use(
    (request) => onResponse<T>(request) as never,
    (request) => onResponseError(request, option) as never
  );
  return axiosInstance;
}
