export const NavigationNames = {
  ROOT: "/",
  CALENDAR: "/calendar",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotPassword",
  HOME: "/home",
  PROJECT: "/project",
  NOTIFICATION: "/notification",
} as const;

export type PageNameType =
  (typeof NavigationNames)[keyof typeof NavigationNames];
