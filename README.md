# GraphQL-Typescript-Server-Boilerplate

## Setting Up TypeORM
```
typeorm init --name graphql-ts-server-boilerplate --database postgres
```
```
Install npm check updates npm install -g npm-check-updates
Use: ncu -a
```
```
yarn install
```
```
Create DB createdb graphql_bolierplate
```
```
Add ts-lint yarn add -D tslint tslint-config-prettier
```
```
Graphql-Yoga yarn add graphql-yoga
```
```
yarn add -D nodemon
```

## Creating TypeORM
```
Entity => User.ts User table on database
```
```
UUID for ID generation yarn add uuid && yarn add -D @types/uuid
```
```
schema.graphql for typeDefs
```
```
yarn add graphql-import for schema importing
```
```
yarn add -D gql2ts for type definitions
```
```
"gen-schema-types": "gql2ts src/schema.graphql -o src/types/schema.d.ts" && yarn gen-schema-types
```
```
psql postgres \c databaseName && \d user
```
```
createConnecton on index for synchronization
```


## Creating User

## Jest

## Setting DB

## Testing DB

## GraphQL Yoga

## GraphQL Schema

## Handling Errors

## Validating Inputs

## Email Confirmation

## Fixing Errors in connection

## Send Email Confirmation

## Login Mutation

## Sessions for Login

## Middleware


## Running jest

## Auth

## Logout

## Client Test

## Logout Multiple Sessions

## Lock User Account

## Forgot Password

## Rate Limit

## Twitter Oauth

## React

## Tests In Parallel

## Merging

