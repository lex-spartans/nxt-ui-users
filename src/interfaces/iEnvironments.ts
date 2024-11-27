/**
 * Represents the configuration settings for different environments.
 *
 * This interface defines the structure for an environment configuration,
 * which includes:
 * - the base URL of the environment
 * - the version of the application or environment
 * - an array of releases available in the environment
 *
 * @interface IEnvironments
 */
export interface IEnvironments {

  /**
   * The base URL for the environment, typically used for API endpoints
   * or web access.
   * @type {string}
   */
  baseUrl: string;
}
