# Project Layout

This project is split into to main parts (folders):

- `app`: Contains client-side code (i.e. components, entry point to site, etc.).
- `graphql`: Contains backend code for GraphQL server to expose GraphQL API for client

The build tool `Vite` is used alongside the `TypeScript` compiler. Each main folder mentioned above contains important config files

-`vite.config.ts`: Vite's configuration file for dev server (uses `ESBuild`), production build (uses `Rollup`), and other config options -`tsconfig.json`: The main TS config file for configutation of `TSC` in regards to application code files (i.e. jsx, tsx, etc.) -`tsconfig.node.json`: File more so for configuring how Vite and Node interact after TSC compiles code.

Each main part has a `dist` and a `src` folder. The files from `src` are the input files to the build/compile process and outputed to `dist`.

The scripts for this project must be executed at the top level of the project (so in `nutrition-app/`).

# To Implement Next

Ideas to implement into the project next

- Integrate a sqlite db for storing data instead of storing static data in a ts file (`graphql/src/data/nutrition.ts`).
- Connect the sqlite db to the Apollo server in `graphql/`
- Expose the GraphQL API to the client application

# Issues

Below is a list of current issues that will be resolved as this project progresses

- The scripts defined in `package.json` are finicky about where they can be executed. If they are not ran at the top level folder (`nutrition-app/`) then the file paths for the TS config files defined in `package.json` will not be located properly
- Having Vite/Rollup build the `graphql` portion of the project is proving to be a hassle. The ts files in `graphql/src` can be compiled correctly using the script `npm run graphql-dev`. However, getting the sqlite file to transfer into the `dist` folder is not possible with TSC, therefore, Vite is needed for this step (I believe). A few of the issues for Vite during the build phase is the lack of an entry point (i.e. index.html). There is a way to specify the entry point to Rollup via the `vite.config.ts` file, thought I am still looking into the options in more detail.
