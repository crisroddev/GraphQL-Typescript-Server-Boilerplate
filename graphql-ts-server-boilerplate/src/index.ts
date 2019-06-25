import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
    Query: {
        hello: (_: any, { name }: any ) => `Hello ${name || 'world'}`,
    },
}

const server = new GraphQLServer({ resolvers })
server.start(() => console.log('Server is running on localhost:4000'))