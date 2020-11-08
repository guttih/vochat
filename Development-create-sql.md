# How to Create a SQL script with pgAdmin
This document describes how you would export a table from pgAdmin to a .sql 
script allowing you to create a test script data which you could insert via
command prompt.
## Export existing table data to a insert script file

1. Open pgAdmin
2. Select the table you want to export from
3. Right-click on that table and select backup
4. In the General tab do the following 
    - Filename:
        Select where to store the exported file, the filename should have the 
        file extension  .sql example: *C:\Users\gutti\Downloads\sessions.sql*
    - Format: Plain
    - Encoding: UTF8
5. Select the Dump options tab and switch on the following switches in 
   the following sections.
   - Sections
     - Data: Yes
   - Type of objects
     - Blobs: Yes
   - Queries
     - Use Column inserts: Yes
     - Use Insert Commands: Yes
     - Include CREATE DATABASE statement: Yes
     - Include DROP Database statement: Yes
   - Miscellaneous
     - Verbose messages: Yes
6. Click the Backup button
7. Open your exported file and check if it looks like you wanted it.
  - You could for example want to comment out the  the *CREATE Database* and 
    *Drop database* statements.

## Run the insert script file


Running a script called sessions.sql to 
Create the table sessions and add data to it.
```shell
cd ./data/vochat
docker cp sessions.sql postgres:/docker-entrypoint-initdb.d/sessions.sql && docker exec -u postgres postgres psql vochat postgres -f docker-entrypoint-initdb.d/sessions.sql
```

Running a script called tokens.sql to 
Create the table tokens and add data to it.
cd ./data/vochat
```shell
docker cp tokens.sql postgres:/docker-entrypoint-initdb.d/tokens.sql && docker exec -u postgres postgres psql vochat postgres -f docker-entrypoint-initdb.d/tokens.sql
```

## Reference
 - Other Development documents in this repository
   - [Development.md]
   - [Development-process.md]
   - [Development-GraphQL.md]

[Development-process.md]:Development-process.md
[Development-GraphQL.md]:Development-GraphQL.md
[Development.md]:Development.md
