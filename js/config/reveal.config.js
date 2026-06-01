/**
 * Reveal.js configuration object.
 * Centralized to allow easy modification without touching controller logic.
 */
export const REVEAL_CONFIG = Object.freeze({
  hash: true,
  center: true,
  slideNumber: 'c/t',
  transition: 'slide',
  backgroundTransition: 'fade',
  controls: true,
  progress: true,
  navigationMode: 'linear',
  pdfSeparateFragments: false,
  plugins: [], // Populated at runtime
  width: 1440,
  height: 900,
  margin: 0.05,
  minScale: 0.2,
  maxScale: 1.6,
});
