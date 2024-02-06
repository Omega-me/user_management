import { MutationKey, QueryKey } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { eHttpMethod } from '../enums';
import { IMutationOpts, IQueryOpts } from '../interfaces';

export const generatUrlAndKeys = <TData>(opts: {
  config?: IQueryOpts<TData> | IMutationOpts<TData>;
  url: string;
  keys: string[];
  isMuatation?: boolean;
}): {
  url: string;
  keys: QueryKey | MutationKey;
  axiosConfig: AxiosRequestConfig;
  methode: eHttpMethod | undefined;
  hasInvalidation: boolean;
  hasErrorHandling: boolean;
} => {
  let url: string = opts.url;
  let keys: QueryKey = [...opts.keys];
  let hasAuthentication = true;
  let hasInvalidation = true;
  let hasErrorHandling = true;
  let methode: eHttpMethod | undefined = undefined;

  if (opts.isMuatation) {
    methode = eHttpMethod.POST;
    const mutationConfig = opts.config as IMutationOpts<TData>;
    hasInvalidation = !!mutationConfig?.queryConfig?.hasInvalidation;

    if (mutationConfig?.queryConfig?.hasErrorHandling === false) {
      hasErrorHandling = false;
    }
  }
  if (opts.config?.queryConfig?.queryUrl) {
    url = `${opts.url}/${opts.config.queryConfig.queryUrl}`;
    keys = [...keys, opts.config.queryConfig.queryUrl];
  }
  if (opts.config?.queryConfig?.queryParam) {
    url = `${opts.url}/${opts.config.queryConfig.queryParam}`;
    keys = [...keys, opts.config.queryConfig.queryParam];
    if (opts.isMuatation) {
      methode = eHttpMethod.PATCH;
    }
  }
  if (opts.config?.queryConfig?.queryString) {
    url = `${opts.url}?${opts.config.queryConfig.queryString}`;
    keys = [...keys, opts.config.queryConfig.queryString];
  }
  if (opts.config?.queryConfig?.queryKey) {
    keys = [...keys, opts.config?.queryConfig?.queryKey];
  }

  if (opts.isMuatation && opts?.config?.httpConfig?.methode) {
    methode = opts?.config?.httpConfig?.methode;
  }
  if (opts.config?.httpConfig?.axiosConfig?.hasAuth) {
    hasAuthentication = opts.config?.httpConfig?.axiosConfig?.hasAuth;
  }
  let axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${'token'}`,
      ...opts.config?.httpConfig?.axiosConfig?.headers,
    },
    ...opts.config?.httpConfig?.axiosConfig,
  };
  if (!hasAuthentication) {
    axiosConfig = {
      ...opts.config?.httpConfig?.axiosConfig,
    };
  }

  return {
    url,
    keys,
    axiosConfig,
    methode,
    hasInvalidation,
    hasErrorHandling,
  };
};

/**
 *
 * @param config
 * @returns
 */
export const arraysToObjectMapper = (config: { keys: string[]; values: Array<string | number> }) => {
  const object = config.keys.reduce((obj: any, key: string, index: number) => {
    obj[key] = config.values[index];
    return obj;
  }, {});
  return object;
};

/**
 *
 * @param obj
 * @param key
 * @returns
 */
export const getValueByChainedKeys = (obj: any, key: string) => {
  const keys = key.split('.');
  let value = obj;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return undefined;
    }
  }
  return value;
};
