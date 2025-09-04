import { lazy } from "react";
import { ROUTES } from "../constants/constants";

const Home = lazy(() => import("@/pages/HomePage/index"));

export interface CustomRouteConfig {
  path: string;
  title?: string;
  loginRequired?: boolean;
  redirectIfLogged?: boolean;
  component: any;
}

const config: CustomRouteConfig[] = [
  /* Home */
  {
    path: ROUTES.HOME,
    loginRequired: true,
    component: Home,
  },
];

export default config;
