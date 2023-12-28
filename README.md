# Project Layout

This project is split into to main parts (folders):

- `app`: Contains client-side code (i.e. components, entry point to site, etc.).
- `graphql`: Contains backend code for GraphQL server to expose GraphQL API for client

The build tool `Vite` is used alongside the `TypeScript` compiler. Each main folder mentioned above contains important config files

-`vite.config.ts`: Vite's configuration file for dev server (uses `ESBuild`), production build (uses `Rollup`), and other config options -`tsconfig.json`: The main TS config file for configutation of `TSC` in regards to application code files (i.e. jsx, tsx, etc.) -`tsconfig.node.json`: File more so for configuring how Vite and Node interact after TSC compiles code.

Each main part has a `dist` and a `src` folder. The files from `src` are the input files to the build/compile process and outputed to `dist`.

The npm package `tsx` ([package info](https://www.npmjs.com/package/tsx)) resolves the previous issues of being able to execute npm commands from specific locations within the project. This package is used instead of other packages like `nodemon` because it just works out-of-the-box and is actually compatible with the version of `TypeScript` used in this project.

# Database Design

SQLite is used to manage the project's db. There are two tables defined in the db

- `food`: Stores food name, serving size, and foreign key reference to `nutrition` table
- `nutrition`: Stores calories, total fat, cholesterol, sodium, protein, and sugars for food

There are no constraints on columns, except both tables' PRIMARY KEY column (ID) and the FOREIGN KEY column in `food`

# To Implement Next

Ideas to implement into the project next

- Develop wrapper class to handle communication between Apollo server (GraphQL requests) and SQLite db.
- Expose the GraphQL API to the client application
- TSC only transpiles TS files to JS files, ignoring all other file types. Additional commands (i.e. 'cp <source_path> <dist_path>') are needed to transfer the SQLite DB file from `src/` to `dist/`.

# Issues

Below is a list of current issues that will be resolved as this project progresses

- ~~How to handle relationship between `Food` and `Nutrition` table (A `Food` type must have an associating `Nutrition` type) when comparing between GraphQL schema and SQLite Foreign keys.~~
  - Resolvers handle relationship between `Food` and `Nutrition`. Slight issue with how to approach creating resolvers that return portions of these types (i.e. 'calories', 'total_fat', and 'sodium' from `Nutrition` type). Specifically, defining the return types of functions since these portions are objects themselves.
