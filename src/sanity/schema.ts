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
    },
    {
      name: "language",
      type: "string",
      title: "Language",
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
