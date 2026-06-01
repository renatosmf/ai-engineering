/**
 * Abstraction over localStorage for persistence.
 * Follows Interface Segregation — exposes only get/set for a specific domain.
 */

const STORAGE_PREFIX = 'ai-assisted-dev';

/**
 * @param {string} key
 * @returns {string | null}
 */
export const getItem = (key) => {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}-${key}`);
  } catch {
    return null;
  }
};

/**
 * @param {string} key
 * @param {string} value
 */
export const setItem = (key, value) => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}-${key}`, value);
  } catch {
    // Storage unavailable (private browsing, quota exceeded)
  }
};
