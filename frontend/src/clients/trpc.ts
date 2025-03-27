import { createTRPCClient, httpBatchLink, loggerLink, splitLink, httpSubscriptionLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";

import type { AppRouter } from "@my-project-name/backend";

import queryClient from "#/clients/react-query.ts";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    loggerLink(),
    splitLink({
      condition: (op) => op.type === "subscription",
      true: httpSubscriptionLink({
        url: API_URL,
      }),
      false: httpBatchLink({
        url: API_URL,
      }),
    }),
  ],
});

const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient: queryClient,
});

export default trpc;
