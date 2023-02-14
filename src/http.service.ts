import { Injectable } from '@nestjs/common';
import got, { OptionsOfJSONResponseBody } from 'got';

@Injectable()
export class HttpService {
  async get<T>(url: string, options?: OptionsOfJSONResponseBody) {
    return got.get<T>(url, options).json()
  }

  async post<T>(url: string, body?: object, options?: OptionsOfJSONResponseBody) {
    return got.post<T>(url, {json: body, ...options}).json();
  }

  async patch<T>(url: string, body?: object, options?: OptionsOfJSONResponseBody) {
    return got.patch<T>(url, {json: body, ...options}).json();
  }

  async put<T>(url: string, body?: object, options?: OptionsOfJSONResponseBody) {
    return got.put<T>(url, {json: body, ...options}).json();
  }

  async delete<T>(url: string, options?: OptionsOfJSONResponseBody) {
    return got.delete<T>(url, options).json();
  }
}
