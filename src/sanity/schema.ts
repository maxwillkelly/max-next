import { type SchemaTypeDefinition } from 'sanity'

export const ProjectSchema: SchemaTypeDefinition = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ]
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema],
}
