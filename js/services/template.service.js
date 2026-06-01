/**
 * Template interpolation service.
 * Resolves {{$key}} placeholders in HTML templates using string dictionaries.
 *
 * Single Responsibility: string interpolation only — no DOM, no I/O.
 */

const PLACEHOLDER_RE = /\{\{\$([^}]+)\}\}/g;

/**
 * Interpolate a single template string with the given dictionary.
 * @param {string} template - HTML with {{$key}} placeholders
 * @param {Record<string, string>} strings - key→value map
 * @returns {string} Resolved HTML
 */
export const interpolate = (template, strings) =>
  template.replace(PLACEHOLDER_RE, (_, key) => strings[key] ?? `[missing:${key}]`);

/**
 * Interpolate an array of templates.
 * @param {string[]} templates - Array of HTML template strings
 * @param {Record<string, string>} strings - key→value map
 * @returns {string[]} Array of resolved HTML strings
 */
export const interpolateSlides = (templates, strings) =>
  templates.map((tmpl) => interpolate(tmpl, strings));
