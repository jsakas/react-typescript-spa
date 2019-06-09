import { init } from '@sentry/browser';

APP_ENV == 'production' && init({
  dsn: ''
});
