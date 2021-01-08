import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import Mutation from './graphql/Mutation'
import Post from './graphql/Post'
import Query from './graphql/Query'
import User from './graphql/User'

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