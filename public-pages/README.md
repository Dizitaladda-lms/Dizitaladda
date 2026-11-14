# Public pages

- `app/[...slug]/page.jsx` resolves public URLs through `registry.js` and renders the matching React page.
- Each URL has a JSX component here, organized by its path.
- `metadata.json` and `registry.js` hold the route metadata and page loaders.
- `components/PublicNavbar.jsx` provides shared navigation. `components/LegacyPageContent.jsx` handles retained page interactions.
