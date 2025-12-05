import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://example@o123456.ingest.sentry.io/1234567",
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

