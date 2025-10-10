import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line no-console -- log bootstrap errors to help diagnose startup issues
  .catch((err) => console.error(err));
