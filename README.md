# news-reader

News reader practical test assignment for Stagnation Laboratory

- [Assignment description](https://bit.ly/news-reader-description)
- [Assignment design](https://bit.ly/news-reader-figma)
- [Application live demo](https://tafkanator.github.io/news-reader/)

## Libraries and tools used

- [Vite](https://vitejs.dev/) for setting up development environment
- [Typescript](https://www.typescriptlang.org/) for improving development experience
- [CSS modules](https://vitejs.dev/config/shared-options.html#css-modules) for organizing css code
- [React](https://reactjs.org/) for building frontend UI
- [React Location](https://react-location.tanstack.com/) for routing
- [Apollo client](https://www.apollographql.com/apollo-client) for fetching data from backend
- [Graphql Code Generator](https://www.the-guild.dev/graphql/codegen) for adding type-safety to the backend data
- [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) for keeping consistent code format
- [VSCode](https://code.visualstudio.com/) for editing code

## Development environment requirements

- Node v16 or newer

## Running in dev

- Create .env.local file `touch .env.local` and overwrite any variable as needed (see `.env` for all variables)
- Run `npm install`
- Run `npm run start`

## Running prod build

- Run `npm install`
- Run `npm run build`
- Run `npm run preview`

## Updating Github pages

This is done automatically whenever code is pushed to the main branch.
URL: https://tafkanator.github.io/news-reader/

## Further oppurtunities / imporvements

- [PWA](https://web.dev/progressive-web-apps/) for providing installable experience
- Server rendering for improved [FCP](https://web.dev/fcp/) and [SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Persist network data locally. ( [persiting cache](https://www.apollographql.com/docs/react/caching/advanced-topics/#persisting-the-cache) )
- Better layout/design for very large screens
- [Page transitions](https://developer.chrome.com/blog/shared-element-transitions-for-spas/) on page navigation
