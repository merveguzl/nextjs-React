"use client";

import { BrowserRouter as Router } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import AuthNavigation from "./authNavigation";
import "../../../i18n";
import useUserStore from "@/src/store/user";
import LoadingSpinner from "../layouts/spinnerLoading/spinnerLoading";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/src/lib/queryClient";

export default function RootNavigation() {
  const { isLogin } = useUserStore();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <LoadingSpinner />

          {isLogin ? <MainNavigation /> : <AuthNavigation />}
        </Router>
      </QueryClientProvider>
    </>
  );
}
