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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    },
    {
      name: "releaseDate",
      type: "date",
      title: "Release Date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    },
    {
      name: "language",
      type: "string",
      title: "Language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "languageIcon",
      type: "image",
      title: "Language Icon",
      fields: [
        {
          name: "altText",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
      ],
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "github",
      type: "url",
      title: "Github Link",
    },
    {
      name: "deployedUrl",
      type: "url",
      title: "Deployed URL",
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
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema],
};
