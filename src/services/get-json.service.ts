import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV_CONFIG } from '../app/shared/tokens/environments-config';
import { IEnvironments } from '../interfaces/iEnvironments';

/**
 * Description placeholder
 *
 * @export
 * @class GetJsonService
 * @typedef {GetJsonService}
 */
@Injectable({
  providedIn: 'root',
})
export class GetJsonService {
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
   * @constructor
   * @param {IEnvironments} environment
   * @param {HttpClient} httClient
   */
  constructor(
    @Inject(ENV_CONFIG) private environment: IEnvironments,
    private httClient: HttpClient,
  ) {
    this.baseUrl = `${this.environment.baseUrl}`;
  }

  /**
   * Description placeholder
   *
   * @public
   * @returns {Observable<unknown>}
   */
  public getdata(): Observable<unknown> {
    return this.httClient.get(`${this.baseUrl}/posts/1`);
  }
}
