import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENV_CONFIG } from '../app/shared/tokens/environments-config';
import { IEnvironments } from '../interfaces/iEnvironments';

/**
 * Description placeholder
 *
 * @class
 * @class GetJsonService
 * @typedef {GetJsonService}
 */
@Injectable({
  providedIn: 'root',
})
export class GetJsonService {
  private httpClient: HttpClient = inject(HttpClient);
  @Inject(ENV_CONFIG) private environment: IEnvironments = inject(ENV_CONFIG);

  /**
   * Description placeholder
   *
   * @private
   * @type {!string}
   */
  private baseUrl!: string;

  /**
   * Creates an instance of GetJsonService.
   *
   * @class
   *
   */
  constructor() {
    this.baseUrl = `${this.environment.baseUrl}`;
  }

  /**
   * Description placeholder
   *
   * @public
   * @returns {Observable<unknown>}
   */
  public getdata(): Observable<unknown> {
    return this.httpClient.get(`${this.baseUrl}/posts/1`);
  }
}
