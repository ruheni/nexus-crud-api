import { makeSchema } from 'nexus'

export const schema = makeSchema({
  types: [],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
})