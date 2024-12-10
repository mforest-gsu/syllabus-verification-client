import type { RouteObject } from "react-router-dom";

import { Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import ReactQueryProvider from "./lib/react-query/ReactQueryProvider";
import ReactRouterProvider from "./lib/react-router/ReactRouterProvider";
import PageLayout from "./modules/core/components/PageLayout";
import AuthContextProvider from "./modules/auth/contexts/AuthContextProvider";

const LoginPage = lazy(() => import("./modules/auth/pages/LoginPage"));
const VerifyCoursePage = lazy(
  () => import("./modules/verify/pages/VerifyCoursePage")
);
const ErrorPage = lazy(() => import("./modules/core/pages/ErrorPage"));

export default function App(): JSX.Element {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider routes={getRoutes} />
    </ReactQueryProvider>
  );
}

function getRoutes(): RouteObject[] {
  return [
    {
      path: "",
      element: (
        <PageLayout>
          <Outlet />
        </PageLayout>
      ),
      errorElement: (
        <PageLayout>
          <ErrorPage />
        </PageLayout>
      ),
      children: [
        {
          index: true,
          element: (
            <AuthContextProvider>
              <Navigate to="/verify" />
            </AuthContextProvider>
          ),
        },
        {
          path: "/verify",
          element: (
            <AuthContextProvider>
              <VerifyCoursePage />
            </AuthContextProvider>
          ),
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ];
}
