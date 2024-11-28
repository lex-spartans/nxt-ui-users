/**
 * Languages
 *
 * @type {Language}
 */
export type Language = 'es' | 'en' | 'fr' | 'de';

/**
 * Default language
 *
 * @type {Language}
 */
export const DEFAULT_LANGUAGE: Language = 'es';

/**
 * Language key for storage
 *
 * @type {string}
 */
export const LANGUAGE_KEY: string = 'language' as const;
