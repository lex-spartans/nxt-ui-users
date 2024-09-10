import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';


import { environment } from '../environments/environment.dev';
import { IEnvironments } from '../interfaces/iEnvironments';

import { routes } from './app.routes';
import { authInterceptorInterceptor } from './shared/interceptors/auth-interceptor.interceptor';
import { ENV_CONFIG } from './shared/tokens/environments-config';

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
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
  ],
};
