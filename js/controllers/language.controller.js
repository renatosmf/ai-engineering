/**
 * Language controller.
 * Single Responsibility: handles language selector UI and renders slides on locale change.
 */

import { getCurrentLocale, getTranslations, setLocale, onLocaleChange } from '../services/i18n.service.js';
import { $, $$, highlightCodeBlocks } from '../utils/dom.utils.js';
import * as presentation from '../controllers/presentation.controller.js';

const SWITCH_DELAY_MS = 120;

/** @type {HTMLElement} */
let slidesElement;

/** @type {HTMLElement} */
let footerNote;

/** @type {HTMLElement} */
let selectorLabel;

/** @type {HTMLElement} */
let presentationRoot;

/** @type {HTMLElement[]} */
let languageButtons;

/**
 * Update active state on language buttons.
 * @param {string} locale
 */
const updateButtons = (locale) => {
  languageButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === locale;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
};

/**
 * Render slides and update page metadata for the given locale.
 * @param {string} locale
 */
const renderSlides = (locale) => {
  const content = getTranslations();
  if (!content) return;

  const currentIndices = presentation.getIndices();
  const shouldAnimate = presentation.isInitialized();

  const applyRender = () => {
    slidesElement.innerHTML = content.slides.join('');
    document.documentElement.lang = content.htmlLang;
    document.title = content.title;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', content.metaDescription);
    selectorLabel.textContent = content.selectorLabel;
    footerNote.innerHTML = content.footer;
    updateButtons(locale);
    highlightCodeBlocks();

    presentation.syncAndNavigate(
      currentIndices.h ?? 0,
      currentIndices.v ?? 0,
      slidesElement.children.length,
    );

    if (shouldAnimate) {
      setTimeout(() => presentationRoot.classList.remove('is-switching'), SWITCH_DELAY_MS);
    } else {
      presentationRoot.classList.remove('is-switching');
    }
  };

  if (shouldAnimate) {
    presentationRoot.classList.add('is-switching');
    setTimeout(applyRender, SWITCH_DELAY_MS);
  } else {
    applyRender();
  }
};

/**
 * Initialize the language controller: cache DOM references, bind events, render initial state.
 */
export const initialize = () => {
  slidesElement = $('#slides');
  footerNote = $('#footerNote');
  selectorLabel = $('#selectorLabel');
  presentationRoot = $('#presentationRoot');
  languageButtons = $$('.lang-button');

  // Bind click events
  languageButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLocale(btn.dataset.lang));
  });

  // React to locale changes
  onLocaleChange(renderSlides);

  // Initial render
  renderSlides(getCurrentLocale());
};
