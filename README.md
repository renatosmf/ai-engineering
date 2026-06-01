# AI-Assisted Development Presentation

Apresentação interativa sobre **Desenvolvimento Assistido por IA** construída com [Reveal.js](https://revealjs.com/).

## 🌐 Acesse Online

👉 **[https://renatosmf.github.io/ai-engineering/](https://renatosmf.github.io/ai-engineering/)**

## 🏗️ Arquitetura

Projeto modular com separação de responsabilidades (SOLID):

```
├── index.html              # Shell HTML (entry point para GitHub Pages)
├── css/                    # Estilos em camadas (variables, base, components, layout, responsive)
├── js/                     # Módulos ES2023+ (services, controllers, utils, config)
├── data/                   # Conteúdo dos slides (PT-BR e EN-US)
└── build.py                # Gera versão standalone (file://)
```

## 🚀 Uso Local

**Com servidor** (desenvolvimento):
```bash
python3 -m http.server 8000
# Abrir http://localhost:8000
```

**Sem servidor** (standalone):
```bash
python3 build.py
# Abrir dist/index.html diretamente no navegador
```

## 🌍 Idiomas

- 🇧🇷 Português (PT-BR)
- 🇺🇸 English (EN-US)

Troque pelo seletor no canto superior direito da apresentação.

## ⌨️ Atalhos

| Tecla | Ação |
|-------|------|
| `S` | Visão do apresentador |
| `F` | Tela cheia |
| `?print-pdf` | Modo impressão |
