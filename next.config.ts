import type { NextConfig } from "next";
import path from "path";

// @tailwindcss/node resolves CSS modules from path.dirname(cwd) when PostCSS
// `from` is not set, which points outside this project. Override the hook it
// exposes so it always finds tailwindcss in the local node_modules.
(globalThis as Record<string, unknown>)["__tw_resolve"] = (id: string) => {
  if (id === "tailwindcss") {
    return path.resolve(process.cwd(), "node_modules/tailwindcss/index.css");
  }
  return null;
};

const nextConfig: NextConfig = {};

export default nextConfig;
