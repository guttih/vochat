# Development

## Docker for postgres database
How to create a Postgres (PostgreSQL) docker and add data

### Create Postgres docker
Create postgres docker

Creating and running a docker named, postgres with password postgres
```
docker stop postgres
docker rm postgres
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres
```
### Adding database and data
Open a new git-bash or linux window execute the following commands.

#### Create the database
```
docker exec -u postgres postgres createdb vochat
```

#### Create tables and Add database

Go to the root of the project and do the following.
I need to do these commands in git-bash for it to work

Goto data folder
```
cd ./data/vochat
```

Create table moderators and add data
```
docker cp moderators.sql postgres:/docker-entrypoint-initdb.d/moderators.sql && docker exec -u postgres postgres psql vochat postgres -f docker-entrypoint-initdb.d/moderators.sql
```

Create table rooms and add data
```
docker cp rooms.sql postgres:/docker-entrypoint-initdb.d/rooms.sql && docker exec -u postgres postgres psql vochat postgres -f docker-entrypoint-initdb.d/rooms.sql
```

## Start the apps

### Start the api
docker must be running for the api to work
```
todo:
```

### start the web app
The api must be running for the web app to work
```
yarn start chatter
```