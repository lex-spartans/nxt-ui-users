import { bootstrapApplication } from '@angular/platform-browser';
import { throwError } from 'rxjs';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err: Error) =>
  throwError(err),
);
