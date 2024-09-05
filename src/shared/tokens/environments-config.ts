import { InjectionToken } from '@angular/core';
import { IEnvironments } from '../../interfaces/iEnvironments';

/**
 * InjectionToken used for the injection dependency of ENV_CONFIG.
 */
export const ENV_CONFIG: InjectionToken<IEnvironments> =
  new InjectionToken<IEnvironments>('app.config');
