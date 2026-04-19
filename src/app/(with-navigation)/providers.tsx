"use client";

import { trpc } from "../_trpc/client";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

type HeroUIHref = string | URL;

type HeroUIRouterOptions = {
  replace?: boolean;
  scroll?: boolean;
};

const getHref = (href: HeroUIHref) => {
  if (typeof href === "string") return href;
  if (href instanceof URL) return href.toString();

  return String(href);
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <HeroUIProvider
            navigate={(
              href: HeroUIHref,
              routerOptions: HeroUIRouterOptions | undefined,
            ) => {
              const path = getHref(href);

              if (routerOptions?.replace) {
                router.replace(path, { scroll: routerOptions.scroll });
                return;
              }

              router.push(path, { scroll: routerOptions?.scroll });
            }}
            useHref={getHref}
          >
            {children}
          </HeroUIProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
