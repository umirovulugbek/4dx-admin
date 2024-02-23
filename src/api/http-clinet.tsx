/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "./api";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const Axios = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: API_URL,
    headers: {},
  };

  return {
    get: <T,>(
      url: string,
      options: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> =>
      axios.get<T>(url, { ...defaultOptions, ...options }),
    post: <T,>(
      url: string,
      data: any,
      options: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> =>
      axios.post<T>(url, data, { ...defaultOptions, ...options }),
    put: <T,>(
      url: string,
      data: any,
      options: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> =>
      axios.put<T>(url, data, { ...defaultOptions, ...options }),
    patch: <T,>(
      url: string,
      data: any,
      options: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> =>
      axios.patch<T>(url, data, { ...defaultOptions, ...options }),
    delete: <T,>(
      url: string,
      options: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T>> =>
      axios.delete<T>(url, { ...defaultOptions, ...options }),
  };
};

export default Axios;
