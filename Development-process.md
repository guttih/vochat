# Notes about setting up this project
This document contains my notes on how I created this workspace and the apps in it.
What commands I used and so on.  The editor I use is [Visual Studio Code] (for short VsCode).


## Requirements or nice to haves
 1. [NX] to create the workspace, projects and nestjs components required to make the apps.
    There is a [Nx Console] plugin for [VsCode], I use to find the correct [NX] commands.
 2. [yarn] is a package manager like [npm] (which is installed with [Node.js]).
 2. [Prettier] VsCode plugin to help with formatting my code.

## Development
See [Development.md](Development.md) to get information on how to start developing in this project.

## Notes
I work on windows, so some of these comments need to be adjusted for linux environments.

### Creating Workspace
1. Opened [Powershell] (command line window) in Administrative mode, and did the following.
2. Installed the [NX] CLI globally `npm install -g nx`
3. Created a workspace named **vochat** with [NX] `nx create-nx-workspace vochat` and selected when asked: **empty**, **Nx** and useCloude: **Yes**

### Creating the frontend application
Note, this app is not finished, (a hello world scenario) but this is how you 
would create a nextjs app withe styled-components in a NX workspace.

1. Opened [Powershell]
2. Installing the [Next.js Plugin] NX plugin `npm install -D @nrwl/next` or  or `yarn add -D @nrwl/next` to be able to give the next command.
3. Create the frontend app **chatter** `nx g @nrwl/next:application chatter --style=styled-components`
Now you should have a frontend.
   
### Creating the backend application
And now my favorite part, the backend which is a nestjs application.
1. Opened [Powershell] 
2. Installing the [Nest.js Plugin] NX plugin `npm install -D @nrwl/nest` or `yarn add -D @nrwl/nest` to be able to give the next command.
3. Create the backend app **voserver** `nx generate @nrwl/nest:application voserver`
4. Installing needed packages for the database to work `npm install --save @nestjs/typeorm typeorm pg`
5. Installing other packages for the backend to have A nice swagger page.  
   This allows you to add decorators above properties on your controller methods
   and classes to help with user parsing and request and response descriptions.
     -  swagger `npm install --save @nestjs/swagger swagger-ui-express`
     -  validation decorators `npm i --save class-validator class-transformer` for automatic user input validation.


#### Adding a controller, module and a service
Now you can start adding stuff to you voserver application. This is how you 
would add a controller, module and a service named ChatToken- to the voserver app.
```
nx generate @nrwl/nest:module --name=ChatToken --project=voserver
nx generate @nrwl/nest:controller --name=ChatToken --project=voserver 
nx generate @nrwl/nest:service --name=ChatToken --project=voserver
```

#### Adding a Library to your workspace
This is how you would add a workspace library called **disk-functions** usable 
by all apps in the workspace.
```
nx generate @nrwl/nest:library --name=disk-functions --importPath=@advania/disk-functions
```
And if you want  to add a service to the library you would do it just like it was done for a app, just change the name of the project from voserver to disk-functions like so: `nx generate @nrwl/nest:service --name=io --project=disk-functions`

The importPath section means that when you are developing your app and are 
importing components or types from the library, you can refer to the library 
in the from part like given.  Example on when importing a class called 
**DiskFunctionsModule** from a module in your app: 
`import { DiskFunctionsModule } from '@advania/disk-functions';`

#### Removing a library from your workspace
If you need to remove the library **disk-functions** (that is, delete it) from a 
workspace you can give the following command: `nx generate remove disk-functions`.
But keep in mind that you will need to remove workspaces references to it manually
by removing it from the files jest.config.js and tsconfig.base.json.

To be sure just text search all files in project for the name of your library.


#### References

 - DataBase - I got a lot of info from the [nestjs typeorm tutorial] when creating 
   the backend.  Here is some more material about this subject.
   -  [TypeORM]
   - [Nest and TypeORM]
   - [gitbook typeorm] 
  

  
[NX]:https://nx.dev/
[Visual Studio Code]:https://code.visualstudio.com/
[VsCode]:https://code.visualstudio.com/
[Node.js]:https://nodejs.org
[Nx Console]:https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
[Prettier]:https://prettier.io/
[Powershell]:https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7
[Next.js Plugin]:https://nx.dev/latest/angular/plugins/next/overview
[Nest.js Plugin]:https://nx.dev/latest/angular/plugins/nest/overview
[nestjs typeorm tutorial]: https://codebrains.io/nestjs-with-typeorm-building-a-rest-api/
[yarn]:https://yarnpkg.com/
[npm]:https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/
[Nest and TypeORM]:https://docs.nestjs.com/techniques/database
[gitbook typeorm]:https://orkhan.gitbook.io/typeorm/docs/find-options
[TypeORM]:https://typeorm.io/#/