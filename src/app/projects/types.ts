import { q, sanityImage, type Selection, type TypeFromSelection } from "groqd";

export const projectSelection = {
  _id: q.string().uuid(),
  slug: q.slug("slug"),
  title: q.string(),
  name: q.string().nullable(),
  body: q.string(),
  language: q.string(),
  languageIcon: sanityImage("languageIcon", {
    withAsset: ["base"],
  }),
} satisfies Selection;

export type Project = TypeFromSelection<typeof projectSelection>;
