import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { RequestOption } from "./requestOptions";
import { setupInterceptors } from "./interceptors";

export const getHeaders = (): AxiosRequestHeaders => {
  const header: AxiosRequestHeaders = {} as never;
  return header;
};

/**
 * Sorgu parametrelerini URL'ye uygun bir biçimde dizeye çevirir.
 * @param {Map<string, string>} queryParameters - Sorgu parametreleri.
 * @returns {string} URL için sorgu parametreleri dizesi.
 */
const getQueryParams = (queryParameters: Map<string, string>): string => {
  const queries: string[] = [];
  queryParameters.forEach((value, key) => {
    queries.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });

  return queries.join("&");
};

/**
 * Tam URL'yi, temel URI ve istek seçeneklerine göre oluşturur.
 * @param {RequestOption} option - İstek seçenekleri.
 * @param {string} baseUri - Temel URI.
 * @returns {string} Oluşturulan tam URL.
 */
const getUrl = (option: RequestOption, baseUri: string): string => {
  let uri = `${baseUri}${option.url}`;
  const params = option.query ? getQueryParams(option.query) : "";
  if (params) {
    uri += `?${params}`;
  }
  return uri;
};

/**
 * Genel istek gönderme fonksiyonu.
 * @template T - Yanıt tipi.
 * @param {RequestOption} option - İstek seçenekleri.
 * @returns {Promise<T>} Axios isteği sonucu.
 */
export const _request = <T>(option: RequestOption): Promise<T> => {
  const BASE_URI = "https://myappsnextjs-default-rtdb.firebaseio.com/";
  try {
    const header = getHeaders();
    const url = getUrl(option, BASE_URI);
    const specificAxios = setupInterceptors(axios.create(), option);
    const config: AxiosRequestConfig = {
      method: option.method,
      url,
      headers: header,
      responseType: option.responseType,
      maxRedirects: 5,
    };

    if (option.body) {
      config.data = option.body;
    }

    return specificAxios.request(config);
  } catch (err) {
    // Hata işleme daha spesifik hale getirildi.
    return Promise.reject(err);
  }
};

export const _requestThirdParty = <T>(option: RequestOption): Promise<T> => {
  try {
    const header = getHeaders();
    const specificAxios = setupInterceptors(axios.create(), option);
    const config: AxiosRequestConfig = {
      method: option.method,
      url: option.url,
      headers: header,
      responseType: option.responseType,
      maxRedirects: 5,
    };

    if (option.body) {
      config.data = option.body;
    }

    return specificAxios.request(config);
  } catch (err) {
    // Hata işleme daha spesifik hale getirildi.
    return Promise.reject(err);
  }
};
