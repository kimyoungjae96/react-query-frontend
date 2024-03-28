import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import { HttpStatusCode } from "./enums";
import { BACKEND_URL } from "./configs";

type CustomAxiosRequestConfig = AxiosRequestConfig & {
  method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
  url: string;
};

export type IHttpClient = {
  request<T = unknown>(
    config: CustomAxiosRequestConfig
  ): Promise<{
    statusCode: HttpStatusCode;
    data: T;
  }>;
};

export class AxiosHttpClient implements IHttpClient {
  private readonly _axios: AxiosInstance;

  constructor(baseURL: string, config: AxiosRequestConfig = {}) {
    this._axios = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 60 * 1000,
      ...config,
    });

    this._axios.interceptors.request.use(this._handleRequest);
    this._axios.interceptors.response.use(undefined, this._normalizeError);
  }

  private _handleRequest = (config: InternalAxiosRequestConfig) => {
    return config;
  };

  private _normalizeError(e: AxiosError<any>) {
    return Promise.reject(e);
  }

  async request<T = unknown>(
    config: Parameters<IHttpClient["request"]>[0]
  ): Promise<{
    statusCode: HttpStatusCode;
    data: T;
  }> {
    const response = await this._axios.request({
      ...config,
    });

    return {
      statusCode: response.status,
      data: response.data,
    };
  }
}

export const backendHttpClient = new AxiosHttpClient(BACKEND_URL);
