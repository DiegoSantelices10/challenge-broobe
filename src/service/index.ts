/* eslint-disable no-useless-catch */
import axios from 'axios';
import { IApiProps } from './types';
import { API_URL_BASE } from '../environments';

export const api = axios.create({
  baseURL: API_URL_BASE,
});

export const getApi = async ({
  path,
  method,
  data,
  contentType,
  query = '',
}: IApiProps) => {
  try {
    const response = await api({
      method,
      headers: {
        'Content-Type': contentType,
      },
      url: `${path}${query}`,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
