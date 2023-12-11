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
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "altText",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "githubRepos",
      type: "array",
      title: "Github Repos",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "deployedUrl",
      type: "url",
      title: "Deployed URL",
    },
    {
      name: "linkedDesigns",
      type: "array",
      title: "Linked Designs",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "linkedDocuments",
      type: "array",
      title: "Linked Documents",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
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
