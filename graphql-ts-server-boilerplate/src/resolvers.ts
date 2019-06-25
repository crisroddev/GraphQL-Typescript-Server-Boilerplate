export const resolvers = {
    Query: {
        hello: (_: any, { name }: any ) => `Hello ${name || 'world'}`,
    },
}