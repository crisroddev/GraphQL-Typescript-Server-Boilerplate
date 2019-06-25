import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import { resolvers } from './resolvers';
import { createConnection } from "typeorm";

const typeDefs = importSchema("schema.graphql")

createConnection().then(() => {
    const server = new GraphQLServer({ typeDefs, resolvers })
    server.start(() => console.log('Server is running on localhost:4000'))
});
