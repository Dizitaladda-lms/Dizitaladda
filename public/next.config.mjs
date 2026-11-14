/** @type {import('next').NextConfig} */
import { readFile } from "node:fs/promises";

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return JSON.parse(await readFile(new URL("./legacy-redirects.json", import.meta.url), "utf8"));
  },
};

export default nextConfig;
