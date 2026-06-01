/**
 * Internationalization service.
 * Manages locale state, loads translations, and notifies subscribers.
 * Open/Closed: new locales require only a new data module — no changes here.
 */

import { getItem, setItem } from './storage.service.js';

const STORAGE_KEY = 'language';
const DEFAULT_LOCALE = 'pt-BR';

/** @type {Map<string, object>} */
const registry = new Map();

/** @type {Set<(locale: string) => void>} */
const listeners = new Set();

let currentLocale = getItem(STORAGE_KEY) ?? DEFAULT_LOCALE;

/**
 * Register a translation bundle for a locale.
 * @param {string} locale
 * @param {object} translations
 */
export const registerLocale = (locale, translations) => {
  registry.set(locale, translations);
};

/**
 * @returns {string[]} Available locale codes
 */
export const getAvailableLocales = () => [...registry.keys()];

/**
 * @returns {string} Current active locale
 */
export const getCurrentLocale = () => currentLocale;

/**
 * @returns {object | undefined} Translations for the current locale
 */
export const getTranslations = () => registry.get(currentLocale);

/**
 * Switch to a different locale.
 * Persists choice and notifies all subscribers.
 * @param {string} locale
 */
export const setLocale = (locale) => {
  if (!registry.has(locale)) return;
  currentLocale = locale;
  setItem(STORAGE_KEY, locale);
  listeners.forEach((fn) => fn(locale));
};

/**
 * Subscribe to locale change events.
 * @param {(locale: string) => void} callback
 * @returns {() => void} Unsubscribe function
 */
export const onLocaleChange = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

/**
 * Validate and correct locale on init.
 */
export const initialize = () => {
  if (!registry.has(currentLocale)) {
    currentLocale = DEFAULT_LOCALE;
  }
};
