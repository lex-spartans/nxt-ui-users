import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENV_CONFIG } from '../app/shared/tokens/environments-config';
import { IEnvironments } from '../interfaces/iEnvironments';

/**
 * Service for retrieving JSON data from a REST API.
 *
 * This service makes HTTP requests to fetch data from an external API
 * using the provided environment configuration. It uses Angular's
 * `HttpClient` to make GET requests and retrieves data, for example,
 * from `/posts/1`.
 *
 * @class
 * @classdesc GetJsonService is responsible for making HTTP requests to
 *           a configured base URL and returning data.
 * @implements {IEnvironments}
 * @type {GetJsonService}
 */
@Injectable({
  providedIn: 'root',
})
export class GetJsonService {
  /**
   * Instance of `HttpClient` to make HTTP requests.
   *
   * @private
   * @type {HttpClient}
   */
  private httpClient: HttpClient = inject(HttpClient);

  /**
   * Environment configuration injected via token.
   *
   * This holds environment-specific configuration such as `baseUrl`
   * for the API and other settings. It is injected using the `ENV_CONFIG`
   * token.
   *
   * @private
   * @type {IEnvironments}
   */
  @Inject(ENV_CONFIG) private environment: IEnvironments = inject(ENV_CONFIG);

  /**
   * The base URL for API requests, derived from the environment
   * configuration.
   *
   * This is used as the base URL for the HTTP requests made in the
   * service methods. It is set during the service construction based
   * on the `environment.baseUrl` value.
   *
   * @private
   * @readonly
   * @type {string}
   */
  private readonly baseUrl!: string;

  /**
   * Creates an instance of GetJsonService.
   *
   * The constructor initializes the `baseUrl` property using the
   * injected environment configuration. The `baseUrl` is typically
   * set to a base API URL.
   *
   * @class
   */
  constructor() {
    this.baseUrl = `${this.environment.baseUrl}`;
  }

  /**
   * Makes an HTTP GET request to retrieve data from the API.
   *
   * This method sends a GET request to `${baseUrl}/posts/1` and
   * returns the response as an `Observable<unknown>`. It can be used
   * to fetch data from a specific endpoint, such as a post or resource.
   *
   * @public
   * @returns {Observable<unknown>} The observable representing the HTTP
   * request.
   */
  public getdata(): Observable<unknown> {
    return this.httpClient.get(`${this.baseUrl}/posts/1`);
  }
}
