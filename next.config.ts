import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import { codeInspectorPlugin } from "code-inspector-plugin";

const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: "turbopack",
      hotKeys: ["altKey"],
    }),
  },
};

export default withSentryConfig(nextConfig, {
  org: "example-org",
  project: "example-project",
  silent: true,
});
