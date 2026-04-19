import { type PortableTextBlock } from "@portabletext/react";
import { z } from "zod";

const imageAssetSchema = z.object({
  url: z.url().nullable(),
});

const languageIconSchema = z
  .object({
    asset: imageAssetSchema.nullable(),
  })
  .nullable();

const linkedItemSchema = z.object({
  name: z.string().nullable(),
  url: z.url().nullable(),
});

export const projectSummarySchema = z.object({
  _id: z.uuid(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  language: z.string(),
  languageIcon: languageIconSchema,
  subtitle: z.string().nullable(),
});

export type ProjectSummary = z.infer<typeof projectSummarySchema>;

export const projectSchema = projectSummarySchema.extend({
  releaseDate: z.string().nullable(),
  content: z.custom<PortableTextBlock[] | null>(
    (value) => value === null || Array.isArray(value),
  ),
  name: z.string().nullable(),
  deployedUrl: z.url().nullable(),
  githubRepos: z.array(linkedItemSchema).nullable(),
  linkedDesigns: z.array(linkedItemSchema).nullable(),
  linkedDocuments: z.array(linkedItemSchema).nullable(),
  frameworks: z.array(z.string()).nullable(),
});

export type Project = z.infer<typeof projectSchema>;
