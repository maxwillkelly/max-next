import { type SchemaTypeDefinition } from "sanity";

export const ProjectSchema: SchemaTypeDefinition = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: Rule => Rule.required(),
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      }
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "body",
      type: "string",
      title: "Body",
      validation: Rule => Rule.required(),
    },
    {
      name: "language",
      type: "string",
      title: "Language",
      validation: Rule => Rule.required(),
    },
    {
      name: "frameworks",
      type: "array",
      title: "Frameworks",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema],
};
