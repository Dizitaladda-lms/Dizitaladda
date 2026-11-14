import HomePage, { pageMetadata } from "../public-pages/index.jsx";

export const metadata = pageMetadata.title ? { title: pageMetadata.title, description: pageMetadata.description } : {};

export default function Home() {
  return <HomePage />;
}
