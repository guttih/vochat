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

or one liner in linux (git bash)
```
docker stop postgres && docker rm postgres && docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres
```

### Adding database and data

press ctr+c to stop the command above.  The docker should be running even tho, you break here.
then give the command below to create the database vochat.
#### Create the database
```
docker exec -u postgres postgres createdb vochat
```
Now you can run the backend (**voserver**) with the command `yarn start voserver` or `npm run start voserver`.

## Tools and test data
pgAdmin is a nice and easy tool to view the data in the database stored in the running docker. 
Follow these instructions if you want to install it.

1. Download [pgAdmin](https://www.pgadmin.org/download/) 
2. Install pgAdmin
3. Run pgAdmin
3. Create a server connection
  - **General** tab
    - **Name**: vochat
    - **Server group**:Servers
  - **Connection** tab
    - **Host name/address**: localhost
    - **port**: 5432
    - **username**: postgres
    - **password**: postgres


#### Create Example data

**The scripts have not been created** but this is how you would run them.

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

## Starting the apps
There are two apps.  The client (web app/frontend) is called **chatter** and the 
server (api/backend) is called **voserver**

### Starting the server
docker must be running for the api to work
```
 `yarn start voserver` or `npm run start voserver`.
```

### Starting the client
The **server** must be running for the web app to work.
```
`yarn start chatter` or `npm run start chatter`.

```