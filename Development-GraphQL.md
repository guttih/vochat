# Development GraphQL
This document is a continuation of [Development.md] which focusses on adding 
[GraphQL] API to a NX workspace and making it consume and access data from the
workspace app **voserver**.

## Install required packages

Now let's add a GraphQL API to the workspace.

After installing the required graphql packages with this command
**~~npm i @nestjs/graphql graphql-tools graphql apollo-server-express --save~~**
I had problem with running my app.  When i ran it `npm run start voserver` 
I got the following error:
  *(node:5184) UnhandledPromiseRejectionWarning: Error: Cannot find module '@nrwl/nx-cloud'*

But when using [yarn] to install the required graphql packages, I had no 
problems running the app. So install the packages the following way:

```shell
 yarn add @nestjs/graphql graphql-tools graphql apollo-server-express --save
```
And test if the app still runs `npm run start voserver` or `yarn start voserver`

## Connecting GraphQL API to the app
We will be using the [code first] approach instead of [schema first] approach.
So we need to add the **ObjectType()** decorator above the declaration of 
both entity classes, [ChatSession] and [ChatToken].  

Next we add the **Field()** decorator above each class field in those same classes.

Now we create a resolver for the ChatToken entity.  This command will create 
two files *chat-token.resolver.ts* and *chat-token.resolver.spec.ts* and 
add the **ChatTokenResolver** as a provider in the [ChatTokenModule].
```
nx generate @nrwl/nest:resolver --name=ChatToken --project=voserver
```
This is the content of the ChatTokenResolver after this command
```js
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class ChatTokenResolver {}
```
Before we start changing the *ChatTokenResolver* we should create a Resolver for 
ChatSession.
```
nx generate @nrwl/nest:resolver --name=ChatSession --project=voserver
```

Now we add two queries to the ChatTokenResolver allowing us to 
 - Get a ChatToken by id and
 - List all tokens
```ts
import { Inject} from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ResolveField, Parent, Int } from '@nestjs/graphql';
import { ChatToken } from '../entities/chat-token.entity';
import { ChatTokenService } from './chat-token.service';

@Resolver((of) => ChatToken)
export class ChatTokenResolver {
    constructor(@Inject(ChatTokenService) private tokenService: ChatTokenService) {}

    //  Get one token
    //  Playground example query: 
    //    { token(id:2){ id token sessionId name role expires }}
    @Query(returns => ChatToken)
    async token(@Args('id', { type: () => Int }) id: number) {
        return this.tokenService.getItem(id);
    }

    //  List all tokens
    //  Playground example query: 
    //    { tokenList { id token sessionId name role expires } }
    @Query(returns => [ChatToken])
        async tokenList() {
            return this.tokenService.findAll();
    }
}
```
You should now have all the information you need to add queries to the 
ChatSessionResolver your self.

### Connecting GraphQL with to the appModule
This is the most important step, because without it nothing happens.  

To connect the installed GraphQL API to the **voserver** app you will need to 
import it and setup up, in the **voserver** file [AppModule].
```js
import { GraphQLModule } from '@nestjs/graphql';
...

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '.', 'assets'),
            exclude: ['/api*','/graphql*'],
        }),
      ...
    ],
})
```
Now when you run the app `npm run start voserver` you should be able to access
the GraphQL playground from the following url: http://localhost:3333/graphql

You can view the code changes (*.ts files) committed to the repo in this Commit 
[973b795] to be able to view, all changes needed to get the GraphQL working for
the ChatTokenResolver in this project.

This project is now a little overkill for the consumer.  It has both a swagger
and a graphQL web interface.  But this was done for informational purposes. 

Live long an prosper! :eyes:

## Reference
 - GraphQL
     - Tutorial [Nest & TypeScript & GraphQL] 
    - Tutorial [GraphQL API with NestJS] 
 - Other Development documents in this repository
   - [Development.md]
   - [Development-process.md]

[Development.md]:Development.md
[Development-process.md]:Development-process.md
[GraphQL]:https://graphql.org/
[Nest & TypeScript & GraphQL]:https://docs.nestjs.com/graphql/quick-start
[GraphQL API with NestJS]:https://blog.logrocket.com/how-to-build-a-graphql-api-with-nestjs/
[code first]:https://docs.nestjs.com/graphql/quick-start#code-first
[schema first]:https://docs.nestjs.com/graphql/quick-start#schema-first
[ChatSession]:apps/voserver/src/entities/chat-session.entity.ts
[ChatToken]:apps/voserver/src/entities/chat-token.entity.ts
[ChatTokenModule]:apps/voserver/src/chat-token/chat-token.module.ts
[yarn]:https://yarnpkg.com/
[AppModule]:apps/voserver/src/app/app.module.ts
[973b795]:https://github.com/guttih/vochat/commit/973b7958765b1954b5af4ba32d30d55c8851280f