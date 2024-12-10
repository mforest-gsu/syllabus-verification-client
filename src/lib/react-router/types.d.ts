import type { RouteObject, SetURLSearchParams } from "react-router-dom";

export type { RouteObject, SetURLSearchParams };

export type ReactRouterProviderProps = {
  routes: RouteObject[] | (() => RouteObject[]);
};
