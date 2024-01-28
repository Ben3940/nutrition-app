# Goals of Project

1. Better understand `TypeScript` (TS) and the benefits of integrating type safety into `JavaScript` code (and coding in general)

2. Become more proficient with using a build tool (this project uses `Vite` specifically) and structure config files for both `Vite` and TS

3. Gain experience with creating a `GraphQL` (GQL) API to fetch data from the back-end for the client aspect of the app

4. Integrate a `SQLite` database (DB) for data to be stored and then accessed later by the GQL API

# Challenges

1. Project file structure

- I choose to go with placing the front-end and back-end in their own folders. The project is "small" enough to allow a monolithic repo with these sub-folders. A common issue faced was with specifying `file-paths` to config files (i.e. tsconfig.json, vite.config.ts) for the build tool and `TSC`

2. Connecting to the `SQLite` DB

- Initially, I used a package called `node-sqlite` to connect to the DB. However, upon further research, this package offers more "low-level" control of `SQL` queries and had a slightly unintuative approach by use of function-chaining. I instead used a package called `better-sqlite` which acts as a "simplified" or "higher-level wrapper" to `node-sqlite` and was significantly easier to use.

3. Configuration

# Areas to Improve

1. Git commit messages

- I feel my commit messages still need work on becoming more concise yet still informative on what the commit is doing.
