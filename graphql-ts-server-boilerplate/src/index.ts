import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema("schema.graphql")
const resolvers = {
    Query: {
        hello: (_: any, { name }: any ) => `Hello ${name || 'world'}`,
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))