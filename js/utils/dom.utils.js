/**
 * DOM utility helpers.
 * Small, pure functions for common DOM operations.
 */

/**
 * @param {string} selector
 * @returns {HTMLElement | null}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * @param {string} selector
 * @returns {HTMLElement[]}
 */
export const $$ = (selector) => [...document.querySelectorAll(selector)];

/**
 * Highlight all code blocks using the globally available hljs.
 */
export const highlightCodeBlocks = () => {
  if (!window.hljs) return;
  document.querySelectorAll('pre code').forEach((block) => {
    window.hljs.highlightElement(block);
  });
};
