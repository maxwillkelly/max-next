import { q, sanityImage, type Selection, type TypeFromSelection } from "groqd";

export const projectSelection = {
  _id: q.string().uuid(),
  title: q.string(),
  slug: q.slug("slug"),
  releaseDate: q.date(),
  language: q.string(),
  languageIcon: sanityImage("languageIcon", {
    withAsset: ["base"],
  }),
  subtitle: q.string().nullable(),
  content: q.contentBlocks().nullable(),
  name: q.string().nullable(),
} satisfies Selection;

export type Project = TypeFromSelection<typeof projectSelection>;
