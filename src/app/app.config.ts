import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { IEnvironments } from '../interfaces/iEnvironments';
import { ENV_CONFIG } from '../shared/tokens/environments-config';
import { routes } from './app.routes';

/**
 * Description placeholder
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ENV_CONFIG,
      useValue: environment as unknown as IEnvironments,
    },
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
