import { q, sanityImage, type Selection, type TypeFromSelection } from "groqd";

// import { groq } from "next-sanity";
// import { z } from "zod";

export const projectSummarySelection = {
  _id: q.string().uuid(),
  title: q.string(),
  slug: q.slug("slug"),
  language: q.string(),
  languageIcon: sanityImage("languageIcon", {
    withAsset: ["base"],
  }),
  subtitle: q.string().nullable(),
} satisfies Selection;

export type ProjectSummary = TypeFromSelection<typeof projectSummarySelection>;

export const projectSelection = {
  ...projectSummarySelection,
  releaseDate: q.date(),
  content: q.contentBlocks().nullable(),
  name: q.string().nullable(),
  deployedUrl: q.string().url().nullable(),
  githubRepos: q
    .array(
      q.object({
        name: q.string().nullable(),
        url: q.string().url().nullable(),
      }),
    )
    .nullable(),
  linkedDesigns: q
    .array(
      q.object({ name: q.string().nullable(), url: q.string().nullable() }),
    )
    .nullable(),
  linkedDocuments: q
    .array(q.object({ name: q.string(), url: q.string() }))
    .nullable(),
  frameworks: q.array(q.string()).nullable(),
} satisfies Selection;

export type Project = TypeFromSelection<typeof projectSelection>;
