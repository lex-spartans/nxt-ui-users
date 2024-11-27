import { IEnvironments } from '../interfaces/iEnvironments';

/**
 * Defines the environment configuration for the current environment
 * (e.g., development, testing).
 *
 * This constant holds the configuration for the environment, including:
 * - The `baseUrl`, which is the base URL for API requests or web access.
 *
 * This object conforms to the {@link IEnvironments} interface.
 *
 * @constant {IEnvironments} environment
 */
export const environment: IEnvironments = {
  /**
   * The base URL for the environment, typically used for API requests or
   * web access. Default is set to a local server for development.
   *
   * @type {string}
   */
  baseUrl: 'http://localhost:3000/dev',
};
