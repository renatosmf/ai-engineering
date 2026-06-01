/**
 * Application entry point.
 * Bootstraps all modules following Dependency Inversion:
 * high-level policy (this file) orchestrates low-level modules.
 */

import { registerLocale, initialize as initI18n } from './services/i18n.service.js';
import { initialize as initPresentation } from './controllers/presentation.controller.js';
import { initialize as initLanguage } from './controllers/language.controller.js';

import { locale as ptLocale, translations as ptTranslations } from '../data/slides.pt-BR.js';
import { locale as enLocale, translations as enTranslations } from '../data/slides.en-US.js';

const bootstrap = async () => {
  // 1. Register available locales (OCP: add new locales here)
  registerLocale(ptLocale, ptTranslations);
  registerLocale(enLocale, enTranslations);

  // 2. Initialize i18n (validates persisted locale)
  initI18n();

  // 3. Initialize language UI controller (renders initial slides)
  initLanguage();

  // 4. Initialize Reveal.js with plugins
  await initPresentation([RevealHighlight, RevealNotes]);
};

bootstrap();
