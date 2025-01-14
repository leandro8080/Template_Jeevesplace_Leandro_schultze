# Template JeevesPlace Leandro Schultze

## Getting started

1. Install all packages: "npm install"
2. Start the docker container for the database: "docker-compose up"
3. Use "npm run start" to start the application
4. The Website should now run on localhost:3000

# Commands

There are several commands in this project

- npm run start: This starts the application
- npm run lint: This runs the linter for the application
- npm run format: This runs the formatter of the application
- npm run test: With this you can start the tests

## pgAdmin

To access the database, use pgAdmin.

### 1. Start PGAdmin

When not already done, start the docker container with "docker-compose up"

### 2. Add the server

1. Open your webbrowser and go on localhost:9200
2. Press on "Add New Server"
    - **Host:** jeevesplace
    - **Username:** jeevesplace
    - **Password:** MegaSecret1234 (Unless you changed it)

### 3. Access tables

On the left, expand "Servers" -> "jeevesplace" -> "Databases" -> "jeevesplace" -> "Schemas" -> "Public" -> "tables"
