import { IRoute } from "../types/Route";
import { Home, Projects } from "../../pages";
export const routes: IRoute[] = [
  {
    name: "Home Page",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Things",
    path: "/things",
    exact: true,
    component: Projects,
  },
];
