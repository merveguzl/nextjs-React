import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { RequestOption } from "./requestOptions";
import { ErrorInfo, ResponseModel } from "./responseModel";

global.Buffer = global.Buffer || require("buffer").Buffer;

const setLoadingState = (state: boolean) => {
  //store.dispatch(setLoading(state));
};
const onRequest = (
  config: AxiosRequestConfig,
  options: RequestOption
): AxiosRequestConfig => {
  if (options.showLoading === "global") {
    setLoadingState(true);
  }
  return config as AxiosRequestConfig;
};

const onRequestError = (
  error: AxiosError,
  option: RequestOption
): Promise<AxiosError> => {
  // TODO Bad Request 400, internet connection
  setLoadingState(false);

  return Promise.reject(error);
};

const onResponse = <T>(
  response: AxiosResponse,
  option: RequestOption
): ResponseModel<T> => {
  let content = null;
  let error: ErrorInfo | undefined;
  setLoadingState(false);
  return new ResponseModel(response);
};

let refreshTokenOnProcess = false;
let refreshTokenQueue: ((newToken: string) => void)[] = [];

const BadRequestErrorHandle = (error: AxiosError<{ errors: Object }>) => {
  /*  if ('errors' in error?.response?.data) {
    const errors = error.response.data.errors;
    return Promise.reject(new Error(Object.values(errors).join('\n')));
  }*/

  return Promise.reject(error);
};

const onResponseError = async (
  error: AxiosError<{ error: ErrorInfo; errors: Object }>,
  option: RequestOption,
  axiosInstance: AxiosInstance
): Promise<void | AxiosError<ErrorInfo>> => {
  if (option.signalController && error.name === "CanceledError") {
    return;
  }
  setLoadingState(false);

  const originalRequest = error.config as any;
  const errorResponse = error?.response;
  const errorResponseSubErrorObj = errorResponse?.data?.error;

  const defaultErrorLogic = () => {
    return Promise.reject(error);
  };

  try {
    switch (errorResponse?.status) {
      case 400: //!TODO: 400 hatası için özel bir hata yönetimi yapılacaksa buraya yazılacak
        return BadRequestErrorHandle(error);
      case 401:
        break;
      case 403:
        break;
      default:
        return defaultErrorLogic();
    }
  } catch (err) {
    return defaultErrorLogic();
  }
};

export function setupInterceptors<T>(
  axiosInstance: AxiosInstance,
  option: RequestOption
): AxiosInstance {
  axiosInstance.interceptors.request.use(
    (request) => onRequest(request, option) as never,
    (request) => onRequestError(request, option)
  );
  axiosInstance.interceptors.response.use(
    (request) => onResponse<T>(request, option) as never,
    (request) => onResponseError(request, option, axiosInstance) as never
  );
  return axiosInstance;
}
