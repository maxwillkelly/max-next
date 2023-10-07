import { client } from "@/sanity/lib/client";
import { makeSafeQueryRunner } from "groqd";

export const runQuery = makeSafeQueryRunner((query) =>
  client.withConfig({ useCdn: true }).fetch(query),
);
