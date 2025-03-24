import {AxiosResponse} from 'axios';

export type ValidationError = {
  field?: string | null;
  description?: string | null;
};

export type ErrorInfo = {
  code?: string | null;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationError[] | null;
  extraProperties?: any;
};
export type ErrorResponse = {
  error: string;
  error_description: string;
  error_code: string;
  message: string;
};

export class ResponseModel<T> {
  constructor(private response: AxiosResponse) {}

  getData() {
    return this.response.data as T;
  }

  getStatusCode() {
    return this.response.status;
  }
}

export interface ApiErrorResponse {
  errorKey?: string;
  errorMessage?: string;
  timestamp?: string;
  ip?: string;
  path?: string;
  errorType?: string;
  requestId?: string;
  status?: number;
  error?: string;
}

export type ServiceResponse<T> = {
  success: boolean;
  data: T | null;
  error: ApiErrorResponse | null;
};
