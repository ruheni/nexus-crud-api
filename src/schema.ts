import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import Mutation from './Mutation'
import Post from './Post'
import Query from './Query'
import User from './User'

export const schema = makeSchema({
  types: [Post, User, Query, Mutation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})