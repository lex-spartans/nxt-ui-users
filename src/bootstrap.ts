import { bootstrapApplication } from '@angular/platform-browser';
import cssVars from 'css-vars-ponyfill';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

cssVars({
  include: 'style',
  onlyLegacy: false,
  preserveStatic: true,  // Opción para preservar las declaraciones estáticas
  preserveVars: false,   // No es necesario mantener las variables originales
  watch: true,
  silent: true,
  updateURLs: true,
  variables: {
    '--font-family-nxt-360': 'Open Sans, "Helvetica Neue", sans-serif',
    '--font-family-nxt-360-bold': 'Open Sans-bold',
  },
});


bootstrapApplication(AppComponent, appConfig)
  // eslint-disable-next-line @typescript-eslint/typedef,no-console
  .catch((err) => console.error(err));
