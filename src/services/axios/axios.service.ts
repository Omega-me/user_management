import { eHttpMethod } from '@/common/enums';
import { IHttpConfig } from '@/common/interfaces';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import { checkSuccess } from 'common/utils';
// import { toast } from 'react-toastify';
// import { toastOptions } from 'common/configs';

export const httpConnector: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

/**
 *
 * @param methode HTTP methode
 * @param url enpoint url or full url
 * @param config config object of type IHttpConfig<TData>
 * @returns response data
 */
export const httpClient = async <TData = any>(methode: eHttpMethod, url: string, config?: IHttpConfig<TData>): Promise<any> => {
  let response: AxiosResponse<TData, any> | undefined = undefined;
  if (methode === eHttpMethod.POST || methode === eHttpMethod.PUT || methode === eHttpMethod.PATCH) {
    response = await httpConnector[methode](url, config?.data, config?.axiosConfig);
  } else if (methode === eHttpMethod.GET || methode === eHttpMethod.DELETE) {
    response = await httpConnector[methode](url, config?.axiosConfig);
  }
  if (config?.message) {
    // if (checkSuccess(response)) {
    //   toast(config?.message, {
    //     ...toastOptions,
    //     type: 'success',
    //   });
    // }
  }
  return response?.data;
};
