import { QueryClient, DefaultOptions } from "@tanstack/react-query";
import { ApiErrorResponse } from "../api/core/responseModel";

// Extend the default types for React Query
declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiErrorResponse;
  }
}

const defaultOptions: DefaultOptions = {
  queries: {
    retry: 1,
    refetchOnWindowFocus: false,
  },
  mutations: {
    retry: 1,
  },
};

export const queryClient = new QueryClient({
  defaultOptions,
});
