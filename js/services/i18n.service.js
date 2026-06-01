/**
 * Internationalization service.
 * Manages locale state, templates, string bundles, and notifies subscribers.
 * Open/Closed: new locales require only a new strings module — no changes here.
 */

import { getItem, setItem } from './storage.service.js';
import { interpolateSlides } from './template.service.js';

const STORAGE_KEY = 'language';
const DEFAULT_LOCALE = 'pt-BR';

/** @type {string[]} Shared HTML templates */
let templates = [];

/** @type {Map<string, Record<string, string>>} locale → strings */
const registry = new Map();

/** @type {Set<(locale: string) => void>} */
const listeners = new Set();

let currentLocale = getItem(STORAGE_KEY) ?? DEFAULT_LOCALE;

/**
 * Set the shared slide templates (called once at bootstrap).
 * @param {string[]} slideTemplates
 */
export const setTemplates = (slideTemplates) => {
  templates = slideTemplates;
};

/**
 * Register a string bundle for a locale.
 * @param {string} locale
 * @param {Record<string, string>} strings
 */
export const registerLocale = (locale, strings) => {
  registry.set(locale, strings);
};

/** @returns {string[]} Available locale codes */
export const getAvailableLocales = () => [...registry.keys()];

/** @returns {string} Current active locale */
export const getCurrentLocale = () => currentLocale;

/**
 * Get the resolved content for the current locale.
 * Interpolates templates with locale strings on each call.
 * @returns {{ slides: string[], htmlLang: string, title: string, metaDescription: string, selectorLabel: string, footer: string } | undefined}
 */
export const getTranslations = () => {
  const strings = registry.get(currentLocale);
  if (!strings) return undefined;

  return {
    slides: interpolateSlides(templates, strings),
    htmlLang: strings['meta.htmlLang'],
    title: strings['meta.title'],
    metaDescription: strings['meta.metaDescription'],
    selectorLabel: strings['meta.selectorLabel'],
    footer: strings['meta.footer'],
  };
};

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
