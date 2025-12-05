import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://example@o123456.ingest.sentry.io/1234567",
  tracesSampleRate: 1,
  enableLogs: true,
});

