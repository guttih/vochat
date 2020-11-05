# Development GraphQL
This document is a continuation of [Development.md] which focusses on adding 
GraphQL API to a NX workspace and making it consume and access data from the
workspace app voserver.

## Adding GraphQL
Now let's add a GraphQL API to the workspace.
See the [Nest GraphQL] page for good reading material.

Let's install the needed packages
```
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```


[Nest GraphQL]:https://docs.nestjs.com/graphql/quick-start

## Reference
 - GraphQL
     - Tutorial [Nest & TypeScript & GraphQL] 
    - Tutorial [GraphQL API with NestJS] 
 - Other Development documents in this repository
   - [Development.md]
   - [Development-process.md]

[Development.md]:Development.md
[Development-process.md]:Development-process.md
[Nest & TypeScript & GraphQL]:https://docs.nestjs.com/graphql/quick-start
[GraphQL API with NestJS]:https://blog.logrocket.com/how-to-build-a-graphql-api-with-nestjs/
https://docs.nestjs.com/graphql/quick-start