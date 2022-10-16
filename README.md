# news-reader

News reader practical test assignment for Stagnation Laboratory

- [Assignment description](https://bit.ly/news-reader-description)
- [Assignment design](https://bit.ly/news-reader-figma)
- [Application live demo](https://tafkanator.github.io/news-reader/)

## Libraries and tools uesd

- [Vite](https://vitejs.dev/) for setting up development environment
- [Typescript](https://www.typescriptlang.org/) for improving development experience
- [CSS modules](https://vitejs.dev/config/shared-options.html#css-modules) for organizing css code
- [React](https://reactjs.org/) for building frontend UI
- [Apollo client](https://www.apollographql.com/apollo-client) for fetching data from backend
- [React Location](https://react-location.tanstack.com/) for routing
- [Graphql Code Generator](https://www.the-guild.dev/graphql/codegen) for adding type-safety to the backend data
- [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) for keeping consistent code format
- [VSCode](https://code.visualstudio.com/) for editing code

## Development environment requirements

- Node v16 or newer

## Running in dev

- Create .env.local file `touch .env.local` and overwrite any variable as needed (see `.env` for all variables)
- Run `npm install`
- Run `npm run start`

## Running in prod

- Run `npm install`
- Run `npm run build`
- Run `npm run preview`
