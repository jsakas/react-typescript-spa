import * as Sentry from '@sentry/browser';

if (APP_ENV === 'production') {
  const config: Sentry.BrowserOptions = {
    dsn: '',
  };
  
  Sentry.init(config);
}