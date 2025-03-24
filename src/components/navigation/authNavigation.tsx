"use client";

import { Routes, Route } from "react-router-dom";
import { NavigationNames } from "./navigation.type";
import LoginContainer from "../pages/login/login";
import RegisterContainer from "../pages/register/register";
import ForgotPasswordContainer from "../pages/forgotPassword/forgotPassword";

export default function AuthNavigation() {
  return (
    <Routes>
      <Route path={NavigationNames.ROOT} element={<LoginContainer />} />
      <Route path={NavigationNames.LOGIN} element={<LoginContainer />} />
      <Route path={NavigationNames.REGISTER} element={<RegisterContainer />} />
      <Route
        path={NavigationNames.FORGOT_PASSWORD}
        element={<ForgotPasswordContainer />}
      />
    </Routes>
  );
}
