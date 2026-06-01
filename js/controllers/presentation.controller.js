/**
 * Presentation controller.
 * Single Responsibility: manages Reveal.js lifecycle (init, sync, navigation).
 */

import { REVEAL_CONFIG } from '../config/reveal.config.js';
import { highlightCodeBlocks } from '../utils/dom.utils.js';

let initialized = false;

/**
 * @returns {boolean} Whether Reveal.js has been initialized
 */
export const isInitialized = () => initialized;

/**
 * @returns {{ h: number, v: number }} Current slide indices
 */
export const getIndices = () => {
  if (!initialized) return { h: 0, v: 0 };
  return Reveal.getIndices();
};

/**
 * Initialize Reveal.js with plugins.
 * @param {object[]} plugins - Array of Reveal.js plugin references
 * @returns {Promise<void>}
 */
export const initialize = async (plugins = []) => {
  const config = { ...REVEAL_CONFIG, plugins };

  await Reveal.initialize(config);
  initialized = true;
  highlightCodeBlocks();
};

/**
 * Sync Reveal.js state after DOM changes and navigate to position.
 * @param {number} h - Horizontal index
 * @param {number} v - Vertical index
 * @param {number} maxSlides - Total number of slides
 */
export const syncAndNavigate = (h, v, maxSlides) => {
  if (!initialized) return;

  Reveal.sync();

  const targetH = Math.min(h, Math.max(0, maxSlides - 1));
  Reveal.slide(targetH, v, 0);
  Reveal.layout();
};
