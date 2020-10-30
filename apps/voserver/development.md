# Vonage chat server - Development page
Information on this nestjs application.

# How I added it to the workspace
Used this : [typeorm nest tutorial](https://codebrains.io/nestjs-with-typeorm-building-a-rest-api/)
but used the Nx @nnrwl/nest plugin to add app, modules and service to the application.

Installing plugin
```
yarn add -D @nrwl/nest
```

Creating and adding a nest application to the workspace
```
nx generate @nrwl/nest:application voserver
```

Adding typeorm and postgres to the workspace
```
npm install --save @nestjs/typeorm typeorm pg
npm i
```
Creating todos module, controller and service
```
nx generate @nrwl/nest:module --name=todos --project=voserver
nx generate @nrwl/nest:controller --name=todos --project=voserver 
nx generate @nrwl/nest:service --name=todos --project=voserver
```