import { AxiosResponse } from 'axios';

export interface IApiProps {
  apiBase?: string;
  path: string;
  method: string;
  data?: any;
  contentType?: string;
  query?: string;
}

export interface ICallbacksApi {
  successCallback?: (response: AxiosResponse) => void;
  errorCallback?: (error: any) => void;
  finallyCallback?: () => void;
}
