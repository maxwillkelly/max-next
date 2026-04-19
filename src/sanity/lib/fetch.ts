import { client } from "@/sanity/lib/client";
import { type QueryWithoutParams, type QueryParams } from "next-sanity";
import { type ZodType } from "zod";

export const runQuery = async <
  TResult,
  TParams extends QueryParams | QueryWithoutParams = QueryWithoutParams,
>(
  query: string,
  schema: ZodType<TResult>,
  params: TParams extends QueryWithoutParams ? QueryWithoutParams : TParams,
) => {
  const result = await client
    .withConfig({ useCdn: true })
    .fetch<TResult, TParams>(query, params);

  return schema.parse(result);
};
