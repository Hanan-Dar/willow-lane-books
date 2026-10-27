import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://willow-lane-books.example",
  trailingSlash: "never",
  build: { format: "file" },
});
