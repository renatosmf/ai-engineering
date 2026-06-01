/**
 * Application entry point.
 * Bootstraps all modules following Dependency Inversion:
 * high-level policy (this file) orchestrates low-level modules.
 */

import { registerLocale, setTemplates, initialize as initI18n } from './services/i18n.service.js';
import { initialize as initPresentation } from './controllers/presentation.controller.js';
import { initialize as initLanguage } from './controllers/language.controller.js';

import { slideTemplates } from '../data/templates.js';
import { locale as ptLocale, strings as ptStrings } from '../data/strings.pt-BR.js';
import { locale as enLocale, strings as enStrings } from '../data/strings.en-US.js';

const bootstrap = async () => {
  // 1. Register shared templates (single HTML source of truth)
  setTemplates(slideTemplates);

  // 2. Register locale string bundles (OCP: add new locales here)
  registerLocale(ptLocale, ptStrings);
  registerLocale(enLocale, enStrings);

  // 3. Initialize i18n (validates persisted locale)
  initI18n();

  // 4. Initialize language UI controller (renders initial slides)
  initLanguage();

  // 5. Initialize Reveal.js with plugins
  await initPresentation([RevealHighlight, RevealNotes]);
};

bootstrap();
