import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { environment } from '../environments/environment';
import { IEnvironments } from '../interfaces/iEnvironments';

import { routes } from './app.routes';
import { HttpLoaderFactory } from './app.translation';
import { authInterceptor } from './shared/interceptors/auth-interceptor.interceptor';
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
    provideHttpClient(withInterceptors([authInterceptor]), withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'es',
      }),
    ),
  ],
};
