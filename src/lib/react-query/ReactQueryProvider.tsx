import type { WithChildrenProps } from "../react/types";

import { QueryClient, QueryClientProvider, setLogger } from "react-query";

export default function ReactQueryProvider({
  children,
}: WithChildrenProps): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  setLogger({
    log: () => {
      void 0;
    },
    warn: () => {
      void 0;
    },
    error: () => {
      void 0;
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
