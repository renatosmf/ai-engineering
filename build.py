#!/usr/bin/env python3
"""
Build script: inlines all CSS and JS modules into a single index.html
that works directly from the filesystem (file://) without any server.

Usage: python3 build.py
Output: dist/index.html (self-contained, open directly in browser)
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, 'dist')


def read_file(path):
    with open(os.path.join(BASE_DIR, path), 'r', encoding='utf-8') as f:
        return f.read()


def collect_css():
    """Read all CSS files in layer order."""
    css_files = [
        'css/variables.css',
        'css/base.css',
        'css/components.css',
        'css/layout.css',
        'css/presentation.css',
        'css/responsive.css',
    ]
    return '\n'.join(read_file(f) for f in css_files)


def collect_js():
    """
    Read all JS modules and produce a single IIFE script
    that doesn't rely on ESM imports (works on file://).
    """
    # Read data files - extract just the translations object
    pt_data = read_file('data/slides.pt-BR.js')
    en_data = read_file('data/slides.en-US.js')

    # Extract translation objects from the export statements
    pt_obj = re.search(r'export const translations = \{(.*)\};', pt_data, re.DOTALL).group(1)
    en_obj = re.search(r'export const translations = \{(.*)\};', en_data, re.DOTALL).group(1)

    return f"""(function() {{
  'use strict';

  // === Config ===
  const REVEAL_CONFIG = Object.freeze({{
    hash: true,
    center: true,
    slideNumber: 'c/t',
    transition: 'slide',
    backgroundTransition: 'fade',
    controls: true,
    progress: true,
    navigationMode: 'linear',
    pdfSeparateFragments: false,
    plugins: [],
    width: 1440,
    height: 900,
    margin: 0.05,
    minScale: 0.2,
    maxScale: 1.6,
  }});

  // === Storage Service ===
  const STORAGE_PREFIX = 'ai-assisted-dev';

  const getItem = (key) => {{
    try {{ return localStorage.getItem(STORAGE_PREFIX + '-' + key); }}
    catch {{ return null; }}
  }};

  const setItem = (key, value) => {{
    try {{ localStorage.setItem(STORAGE_PREFIX + '-' + key, value); }}
    catch {{}}
  }};

  // === i18n Service ===
  const registry = new Map();
  const listeners = new Set();
  let currentLocale = getItem('language') || 'pt-BR';

  const registerLocale = (locale, translations) => registry.set(locale, translations);
  const getCurrentLocale = () => currentLocale;
  const getTranslations = () => registry.get(currentLocale);

  const setLocale = (locale) => {{
    if (!registry.has(locale)) return;
    currentLocale = locale;
    setItem('language', locale);
    listeners.forEach((fn) => fn(locale));
  }};

  const onLocaleChange = (callback) => {{
    listeners.add(callback);
  }};

  const initI18n = () => {{
    if (!registry.has(currentLocale)) currentLocale = 'pt-BR';
  }};

  // === DOM Utils ===
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const highlightCodeBlocks = () => {{
    if (!window.hljs) return;
    document.querySelectorAll('pre code').forEach((block) => {{
      window.hljs.highlightElement(block);
    }});
  }};

  // === Presentation Controller ===
  let initialized = false;

  const getIndices = () => {{
    if (!initialized) return {{ h: 0, v: 0 }};
    return Reveal.getIndices();
  }};

  const initPresentation = async (plugins) => {{
    const config = {{ ...REVEAL_CONFIG, plugins }};
    await Reveal.initialize(config);
    initialized = true;
    highlightCodeBlocks();
  }};

  const syncAndNavigate = (h, v, maxSlides) => {{
    if (!initialized) return;
    Reveal.sync();
    Reveal.slide(Math.min(h, Math.max(0, maxSlides - 1)), v, 0);
    Reveal.layout();
  }};

  // === Language Controller ===
  const SWITCH_DELAY_MS = 120;

  const initLanguage = () => {{
    const slidesElement = $('#slides');
    const footerNote = $('#footerNote');
    const selectorLabel = $('#selectorLabel');
    const presentationRoot = $('#presentationRoot');
    const languageButtons = $$('.lang-button');

    const updateButtons = (locale) => {{
      languageButtons.forEach((btn) => {{
        const isActive = btn.dataset.lang === locale;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      }});
    }};

    const renderSlides = (locale) => {{
      const content = getTranslations();
      if (!content) return;
      const currentIndices = getIndices();
      const shouldAnimate = initialized;

      const applyRender = () => {{
        slidesElement.innerHTML = content.slides.join('');
        document.documentElement.lang = content.htmlLang;
        document.title = content.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', content.metaDescription);
        selectorLabel.textContent = content.selectorLabel;
        footerNote.innerHTML = content.footer;
        updateButtons(locale);
        highlightCodeBlocks();
        syncAndNavigate(currentIndices.h || 0, currentIndices.v || 0, slidesElement.children.length);

        if (shouldAnimate) {{
          setTimeout(() => presentationRoot.classList.remove('is-switching'), SWITCH_DELAY_MS);
        }} else {{
          presentationRoot.classList.remove('is-switching');
        }}
      }};

      if (shouldAnimate) {{
        presentationRoot.classList.add('is-switching');
        setTimeout(applyRender, SWITCH_DELAY_MS);
      }} else {{
        applyRender();
      }}
    }};

    languageButtons.forEach((btn) => {{
      btn.addEventListener('click', () => setLocale(btn.dataset.lang));
    }});

    onLocaleChange(renderSlides);
    renderSlides(getCurrentLocale());
  }};

  // === Data: PT-BR ===
  const ptTranslations = {{{pt_obj}}};

  // === Data: EN-US ===
  const enTranslations = {{{en_obj}}};

  // === Bootstrap ===
  registerLocale('pt-BR', ptTranslations);
  registerLocale('en-US', enTranslations);
  initI18n();
  initLanguage();
  initPresentation([RevealHighlight, RevealNotes]);
}})();"""


def build():
    os.makedirs(DIST_DIR, exist_ok=True)

    css = collect_css()
    js = collect_js()

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Desenvolvimento Assistido por IA</title>
  <meta name="description" content="Apresentação Reveal.js sobre desenvolvimento assistido por IA para pessoas desenvolvedoras iniciantes no tema." />

  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/black.css" id="theme" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/monokai.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/print/paper.css" media="print" />

  <style>
{css}
  </style>
</head>
<body>
  <div class="selector-shell" aria-label="Language selector">
    <span class="selector-label" id="selectorLabel">Idioma</span>
    <div class="selector-buttons" role="group" aria-labelledby="selectorLabel">
      <button class="lang-button active" type="button" data-lang="pt-BR">PT-BR</button>
      <button class="lang-button" type="button" data-lang="en-US">EN-US</button>
    </div>
  </div>

  <div class="reveal slides-shell" id="presentationRoot">
    <div class="slides" id="slides"></div>
  </div>

  <div class="footer-note" id="footerNote"></div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/highlight.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/notes/notes.js"></script>

  <script>
{js}
  </script>
</body>
</html>"""

    output_path = os.path.join(DIST_DIR, 'index.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    size_kb = os.path.getsize(output_path) / 1024
    print(f'✅ Build completo: dist/index.html ({size_kb:.1f} KB)')
    print(f'   Abra diretamente no navegador — sem servidor necessário.')


if __name__ == '__main__':
    build()
