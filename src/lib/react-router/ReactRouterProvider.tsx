import type { ReactRouterProviderProps } from "./types";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function ReactRouterProvider({
  routes,
}: ReactRouterProviderProps): JSX.Element {
  const router = createBrowserRouter(
    typeof routes === "function" ? routes() : routes,
    {
      basename: import.meta.env.BASE_URL,
    }
  );

  return <RouterProvider router={router} />;
}
