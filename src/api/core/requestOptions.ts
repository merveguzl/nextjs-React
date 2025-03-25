/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenericAbortSignal, ResponseType } from "axios";

export type RequestOption = {
  readonly responseModelType?: string;
  readonly method?:
    | "GET"
    | "PUT"
    | "POST"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
    | "PATCH";
  readonly url?: string;
  readonly headers?: object;
  readonly query?: Map<string, string>;
  readonly body?: any;
  readonly formData?: Map<string, any>;
  readonly mediaType?: string;
  readonly responseType?: ResponseType;
  readonly useToken?: boolean;
  readonly dryRun?: boolean;
  readonly customToken?: string;
  readonly customLanguage?: string;
  readonly customRequestId?: string;
  readonly showLoading?: "global" | "overlay" | "custom";
  readonly showError?: "global" | "overlay" | "custom";
  readonly signalController?: GenericAbortSignal;
  readonly screenCode?: number;
};
