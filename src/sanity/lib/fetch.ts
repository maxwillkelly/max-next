import { env } from "@/env.mjs";
import { client } from "@/sanity/lib/client";
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";

const DEFAULT_PARAMS: QueryParams = {};
const DEFAULT_TAGS: string[] = [];

export const token = env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;

  const isDevelopment = env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}
