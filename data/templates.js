/**
 * Slide HTML templates with i18n placeholders.
 * Placeholders: {{$key}} — resolved at runtime by template.service.js
 * Code blocks (<pre>/<code>) remain inline (not translatable).
 * Structure is language-independent; only data/strings.*.js differ.
 */

export const slideTemplates = [
  `<section>
            <div class="hero">
              <div>
                <span class="eyebrow">{{$hero.0}}</span>
                <h1>{{$hero.1}}</h1>
                <div class="accent-line"></div>
                <p class="subtitle">{{$hero.2}}</p>
                <div class="chip-row">
                  <span class="chip">{{$hero.3}}</span>
                  <span class="chip">{{$hero.4}}</span>
                  <span class="chip">{{$hero.5}}</span>
                  <span class="chip">{{$hero.6}}</span>
                </div>
              </div>
              <div class="panel">
                <h3>{{$hero.7}}</h3>
                <p>{{$hero.8}}</p>
                <div class="stats">
                  <div class="stat-card fragment fade-up">
                    <div class="value">{{$hero.9}}</div>
                    <div class="muted">{{$hero.10}}</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">{{$hero.11}}</div>
                    <div class="muted">{{$hero.12}}</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">{{$hero.13}}</div>
                    <div class="muted">{{$hero.14}}</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">{{$hero.15}}</div>
                    <div class="muted">{{$hero.16}}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$why-it-matters.0}}</span>
            <h2>{{$why-it-matters.1}}</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>{{$why-it-matters.2}}</h4>
                <ul>
                  <li>{{$why-it-matters.3}}</li>
                  <li>{{$why-it-matters.4}}</li>
                  <li>{{$why-it-matters.5}}</li>
                  <li>{{$why-it-matters.6}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$why-it-matters.7}}</h4>
                <ul>
                  <li>{{$why-it-matters.8}}</li>
                  <li>{{$why-it-matters.9}}</li>
                  <li>{{$why-it-matters.10}}</li>
                  <li>{{$why-it-matters.11}}</li>
                </ul>
              </div>
            </div>
            <p class="quote fragment fade-up">{{$why-it-matters.12}}</p>
          </section>`,
  `<section>
            <span class="eyebrow">{{$fundamentals.0}}</span>
            <h2>{{$fundamentals.1}}</h2>
            <div class="grid-4">
              <div class="card fragment fade-up">
                <h4>{{$fundamentals.2}}</h4>
                <p>{{$fundamentals.3}} <strong>{{$fundamentals.4}}</strong>{{$fundamentals.5}}</p>
              </div>
              <div class="card fragment fade-up">
                <h4>{{$fundamentals.6}}</h4>
                <p>{{$fundamentals.7}}</p>
              </div>
              <div class="card fragment fade-up">
                <h4>{{$fundamentals.8}}</h4>
                <p>{{$fundamentals.9}}</p>
              </div>
              <div class="card fragment fade-up">
                <h4>{{$fundamentals.10}}</h4>
                <p>{{$fundamentals.11}}</p>
              </div>
            </div>
            <div class="compare" style="margin-top: 18px;">
              <div class="card fragment fade-right">
                <h4>{{$fundamentals.12}}</h4>
                <ul>
                  <li>{{$fundamentals.13}}</li>
                  <li>{{$fundamentals.14}}</li>
                  <li>{{$fundamentals.15}}</li>
                  <li>{{$fundamentals.16}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$fundamentals.17}}</h4>
                <ul>
                  <li>{{$fundamentals.18}}</li>
                  <li>{{$fundamentals.19}}</li>
                  <li>{{$fundamentals.20}}</li>
                  <li>{{$fundamentals.21}}</li>
                </ul>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$visual-concept.0}}</span>
            <h2>{{$visual-concept.1}}</h2>
            <div class="diagram">
              <div class="agent-flow">
                <div class="agent-node fragment fade-up"><h4>{{$visual-concept.2}}</h4><p>{{$visual-concept.3}}</p></div>
                <div class="agent-node fragment fade-up"><h4>{{$visual-concept.4}}</h4><p>{{$visual-concept.5}}</p></div>
                <div class="agent-node fragment fade-up"><h4>{{$visual-concept.6}}</h4><p>{{$visual-concept.7}}</p></div>
                <div class="agent-node fragment fade-up"><h4>{{$visual-concept.8}}</h4><p>{{$visual-concept.9}}</p></div>
                <div class="agent-node fragment fade-up"><h4>{{$visual-concept.10}}</h4><p>{{$visual-concept.11}}</p></div>
              </div>
            </div>
            <div class="grid-3" style="margin-top: 18px;">
              <div class="card fragment"><h4>{{$visual-concept.12}}</h4><p>{{$visual-concept.13}}</p></div>
              <div class="card fragment"><h4>{{$visual-concept.14}}</h4><p>{{$visual-concept.15}}</p></div>
              <div class="card fragment"><h4>{{$visual-concept.16}}</h4><p>{{$visual-concept.17}}</p></div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$walkthrough.0}}</span>
            <h2>{{$walkthrough.1}}</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$walkthrough.2}}</div>
                <h4>{{$walkthrough.3}}</h4>
                <p>{{$walkthrough.4}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$walkthrough.5}}</div>
                <h4>{{$walkthrough.6}}</h4>
                <p>{{$walkthrough.7}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$walkthrough.8}}</div>
                <h4>{{$walkthrough.9}}</h4>
                <p>{{$walkthrough.10}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$walkthrough.11}}</div>
                <h4>{{$walkthrough.12}}</h4>
                <p>{{$walkthrough.13}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$walkthrough.14}}</div>
                <h4>{{$walkthrough.15}}</h4>
                <p>{{$walkthrough.16}}</p>
              </div>
            </div>
            <div class="callout fragment fade-up" style="margin-top: 18px;">
              <h4>{{$walkthrough.17}}</h4>
              <p>{{$walkthrough.18}}</p>
            </div>
          </section>`,
  `<section>
            <section data-auto-animate>
              <span class="eyebrow">{{$before-after.0}}</span>
              <h2>{{$before-after.1}}</h2>
              <div style="max-width: 1100px; margin: 0 auto;">
                <div class="split" style="gap: 20px;">
                  <div class="conversation fragment fade-right" style="font-size: 0.85em;">
                    <h4 style="font-size: 1.1em; margin-bottom: 12px;">{{$before-after.2}}</h4>
                    <div class="message user" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>{{$before-after.3}}</strong>
                      {{$before-after.4}}
                    </div>
                    <div class="message ai" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>{{$before-after.5}}</strong>
                      {{$before-after.6}} <code>validateRegistration()</code> {{$before-after.7}}
                    </div>
                    <div class="message user fragment" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>{{$before-after.8}}</strong>
                      {{$before-after.9}} <code>@Published</code> {{$before-after.10}}
                    </div>
                    <div class="message ai fragment" style="padding: 10px 14px;">
                      <strong>{{$before-after.11}}</strong>
                      {{$before-after.12}} <code>@Published var validationError</code> {{$before-after.13}}
                    </div>
                  </div>
                  <div class="card fragment fade-left" style="font-size: 0.85em;">
                    <h4 style="font-size: 1.1em; margin-bottom: 12px;">{{$before-after.14}}</h4>
                    <ul style="font-size: 0.95em; line-height: 1.5; margin: 0;">
                      <li style="margin-bottom: 8px;"><strong>{{$before-after.15}}</strong> {{$before-after.16}}</li>
                      <li style="margin-bottom: 8px;"><strong>{{$before-after.17}}</strong> {{$before-after.18}}</li>
                      <li style="margin-bottom: 8px;"><strong>{{$before-after.19}}</strong> {{$before-after.20}}</li>
                      <li><strong>{{$before-after.21}}</strong> {{$before-after.22}} <code>@Published</code>{{$before-after.23}}</li>
                    </ul>
                    <div class="chip-row" style="margin-top: 14px; gap: 8px;">
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">{{$before-after.24}}</span>
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">{{$before-after.25}}</span>
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">{{$before-after.26}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 24px; color: var(--muted); font-size: 0.8em;">
                {{$before-after.27}}
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">{{$before-after.28}}</span>
              <h2>{{$before-after.29}}</h2>
              <div style="max-width: 1100px; margin: 0 auto;">
                <div class="grid-2" style="gap: 18px;">
                  <div class="card fragment fade-right">
                    <h4 style="font-size: 1.05em;">{{$before-after.30}}</h4>
<pre style="font-size: 0.5em; margin: 12px 0;"><code class="language-swift">class RegistrationViewModel: ObservableObject {
  @Published var email: String = ""
  @Published var password: String = ""
  
  func register() {
    // Direto sem validação
    useCase.execute(
      email: email,
      password: password
    )
  }
}</code></pre>
                    <p class="muted" style="font-size: 0.8em; margin-top: 10px;">{{$before-after.31}}</p>
                  </div>
                  <div class="card fragment fade-left">
                    <h4 style="font-size: 1.05em;">{{$before-after.32}}</h4>
<pre style="font-size: 0.5em; margin: 12px 0;"><code class="language-swift">class RegistrationViewModel: ObservableObject {
  @Published var email: String = ""
  @Published var password: String = ""
  @Published var validationError: String?
  
  func register() {
    guard email.contains("@"), 
          email.contains(".") else {
      validationError = "Email inválido"
      return
    }
    guard password.count >= 8 else {
      validationError = "Senha precisa ter 8+ caracteres"
      return
    }
    useCase.execute(email: email, password: password)
  }
}</code></pre>
                    <p class="muted" style="font-size: 0.8em; margin-top: 10px;">{{$before-after.33}}</p>
                  </div>
                </div>
              </div>
            </section>
          </section>`,
  `<section>
            <span class="eyebrow">{{$common-mistakes.0}}</span>
            <h2>{{$common-mistakes.1}}</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>{{$common-mistakes.2}}</h4>
                <ul>
                  <li>{{$common-mistakes.3}}</li>
                  <li>{{$common-mistakes.4}}</li>
                  <li>{{$common-mistakes.5}}</li>
                  <li>{{$common-mistakes.6}}</li>
                  <li>{{$common-mistakes.7}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$common-mistakes.8}}</h4>
                <ul>
                  <li><strong>{{$common-mistakes.9}}</strong> {{$common-mistakes.10}}</li>
                  <li><strong>{{$common-mistakes.11}}</strong> {{$common-mistakes.12}}</li>
                  <li><strong>{{$common-mistakes.13}}</strong> {{$common-mistakes.14}}</li>
                  <li><strong>{{$common-mistakes.15}}</strong> {{$common-mistakes.16}}</li>
                  <li><strong>{{$common-mistakes.17}}</strong> {{$common-mistakes.18}}</li>
                </ul>
              </div>
            </div>
            <div class="compare" style="margin-top: 18px;">
              <div class="card fragment fade-right">
                <h4>{{$common-mistakes.19}}</h4>
<pre><code class="language-markdown">Crie a feature de tarefas.</code></pre>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$common-mistakes.20}}</h4>
<pre><code class="language-markdown">Implemente a validação do POST /tasks.
Contexto: handler em taskController.js e testes em taskController.test.js.
Restrições: não mude o contrato da API nem a camada de persistência.
Aceite: retornar 400 para título vazio e prioridade inválida.
Entrega: diff + testes + breve justificativa das decisões.</code></pre>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$getting-started.0}}</span>
            <h2>{{$getting-started.1}}</h2>
            <div class="checklist">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$getting-started.2}}</div>
                <h4>{{$getting-started.3}}</h4>
                <p>{{$getting-started.4}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$getting-started.5}}</div>
                <h4>{{$getting-started.6}}</h4>
                <p>{{$getting-started.7}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$getting-started.8}}</div>
                <h4>{{$getting-started.9}}</h4>
                <p>{{$getting-started.10}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$getting-started.11}}</div>
                <h4>{{$getting-started.12}}</h4>
                <p>{{$getting-started.13}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$getting-started.14}}</div>
                <h4>{{$getting-started.15}}</h4>
                <p>{{$getting-started.16}}</p>
              </div>
            </div>
            <div class="callout fragment fade-up" style="margin-top: 18px;">
              <h4>{{$getting-started.17}}</h4>
              <p>{{$getting-started.18}} <strong>{{$getting-started.19}}</strong>{{$getting-started.20}}</p>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$first-week.0}}</span>
            <h2>{{$first-week.1}}</h2>
            <div class="metric-grid">
              <div class="card fragment fade-up">
                <h4>{{$first-week.2}}</h4>
                <p>{{$first-week.3}}</p>
              </div>
              <div class="card fragment fade-up">
                <h4>{{$first-week.4}}</h4>
                <p>{{$first-week.5}}</p>
              </div>
              <div class="card fragment fade-up">
                <h4>{{$first-week.6}}</h4>
                <p>{{$first-week.7}}</p>
              </div>
            </div>
            <table class="metric-table fragment fade-up">
              <thead>
                <tr>
                  <th>{{$first-week.8}}</th>
                  <th>{{$first-week.9}}</th>
                  <th>{{$first-week.10}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{$first-week.11}}</td>
                  <td>{{$first-week.12}}</td>
                  <td>{{$first-week.13}}</td>
                </tr>
                <tr>
                  <td>{{$first-week.14}}</td>
                  <td>{{$first-week.15}}</td>
                  <td>{{$first-week.16}}</td>
                </tr>
                <tr>
                  <td>{{$first-week.17}}</td>
                  <td>{{$first-week.18}}</td>
                  <td>{{$first-week.19}}</td>
                </tr>
                <tr>
                  <td>{{$first-week.20}}</td>
                  <td>{{$first-week.21}}</td>
                  <td>{{$first-week.22}}</td>
                </tr>
              </tbody>
            </table>
          </section>`,
  `<section>
            <span class="eyebrow">{{$operational-model.0}}</span>
            <h2>{{$operational-model.1}}</h2>
            <div class="diagram">
              <div class="flow">
                <div class="flow-box fragment fade-up"><h4>{{$operational-model.2}}</h4><p>{{$operational-model.3}}</p></div>
                <div class="flow-box fragment fade-up"><h4>{{$operational-model.4}}</h4><p>{{$operational-model.5}}</p></div>
                <div class="flow-box fragment fade-up"><h4>{{$operational-model.6}}</h4><p>{{$operational-model.7}}</p></div>
                <div class="flow-box fragment fade-up"><h4>{{$operational-model.8}}</h4><p>{{$operational-model.9}}</p></div>
                <div class="flow-box fragment fade-up"><h4>{{$operational-model.10}}</h4><p>{{$operational-model.11}}</p></div>
              </div>
            </div>
            <div class="grid-3" style="margin-top: 18px;">
              <div class="card fragment"><h4>{{$operational-model.12}}</h4><p>{{$operational-model.13}}</p></div>
              <div class="card fragment"><h4>{{$operational-model.14}}</h4><p>{{$operational-model.15}}</p></div>
              <div class="card fragment"><h4>{{$operational-model.16}}</h4><p>{{$operational-model.17}}</p></div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$tradeoffs-practices.0}}</span>
            <h2>{{$tradeoffs-practices.1}}</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>{{$tradeoffs-practices.2}}</h4>
                <ul>
                  <li>{{$tradeoffs-practices.3}}</li>
                  <li>{{$tradeoffs-practices.4}}</li>
                  <li>{{$tradeoffs-practices.5}}</li>
                  <li>{{$tradeoffs-practices.6}}</li>
                  <li>{{$tradeoffs-practices.7}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$tradeoffs-practices.8}}</h4>
                <ul>
                  <li>{{$tradeoffs-practices.9}}</li>
                  <li>{{$tradeoffs-practices.10}}</li>
                  <li>{{$tradeoffs-practices.11}}</li>
                  <li>{{$tradeoffs-practices.12}}</li>
                  <li>{{$tradeoffs-practices.13}}</li>
                </ul>
              </div>
            </div>
            <p class="quote fragment fade-up">{{$tradeoffs-practices.14}} <strong>{{$tradeoffs-practices.15}}</strong></p>
          </section>`,
  `<section>
            <span class="eyebrow">{{$part2-intro.0}}</span>
            <h2>{{$part2-intro.1}}</h2>
            <div class="hero">
              <div>
                <p class="subtitle">{{$part2-intro.2}}</p>
                <div class="chip-row">
                  <span class="chip">{{$part2-intro.3}}</span>
                  <span class="chip">{{$part2-intro.4}}</span>
                  <span class="chip">{{$part2-intro.5}}</span>
                  <span class="chip">{{$part2-intro.6}}</span>
                </div>
              </div>
              <div class="panel">
                <h3>{{$part2-intro.7}}</h3>
                <div class="grid-2" style="margin-top: 12px;">
                  <div class="mini-card fragment fade-up"><div class="value">{{$part2-intro.8}}</div><div class="muted">{{$part2-intro.9}}</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">{{$part2-intro.10}}</div><div class="muted">{{$part2-intro.11}}</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">{{$part2-intro.12}}</div><div class="muted">{{$part2-intro.13}}</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">{{$part2-intro.14}}</div><div class="muted">{{$part2-intro.15}}</div></div>
                </div>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$the-problem.0}}</span>
            <h2>{{$the-problem.1}}</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>{{$the-problem.2}}</h4>
                <ul>
                  <li>{{$the-problem.3}}</li>
                  <li>{{$the-problem.4}}</li>
                  <li>{{$the-problem.5}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$the-problem.6}}</h4>
                <ul>
                  <li>{{$the-problem.7}}</li>
                  <li>{{$the-problem.8}}</li>
                  <li>{{$the-problem.9}}</li>
                </ul>
              </div>
            </div>
            <div class="stats" style="margin-top: 18px;">
              <div class="stat-card fragment fade-up"><div class="value">{{$the-problem.10}}</div><div class="muted">{{$the-problem.11}}</div></div>
              <div class="stat-card fragment fade-up"><div class="value">{{$the-problem.12}}</div><div class="muted">{{$the-problem.13}}</div></div>
              <div class="stat-card fragment fade-up"><div class="value">{{$the-problem.14}}</div><div class="muted">{{$the-problem.15}}</div></div>
            </div>
          </section>`,
  `<section>
            <section data-auto-animate>
              <span class="eyebrow">{{$solution-layers.0}}</span>
              <h2>{{$solution-layers.1}}</h2>
              <div class="diagram">
                <div class="flow" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>{{$solution-layers.2}}</h4>
                    <p><code>.ai/specs/</code> {{$solution-layers.3}} <code>.ai/rules/</code><br>{{$solution-layers.4}}</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>{{$solution-layers.5}}</h4>
                    <p><code>.ai/agents/</code> {{$solution-layers.6}} <code>.ai/skills/</code><br>{{$solution-layers.7}}</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>{{$solution-layers.8}}</h4>
                    <p>{{$solution-layers.9}}<br>{{$solution-layers.10}}</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>{{$solution-layers.11}}</h4>
                    <p><code>.ai/harness/</code> {{$solution-layers.12}} <code>.ai/gates/</code><br>{{$solution-layers.13}}</p>
                  </div>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 30px; color: var(--muted); font-size: 0.8em;">
                {{$solution-layers.14}}
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">{{$solution-layers.15}}</span>
              <h2>{{$solution-layers.16}} <code>.ai/</code></h2>
              <div style="display: grid; grid-template-columns: 1fr; gap: 20px; max-width: 900px; margin: 0 auto;">
                <div class="card">
                  <h4>{{$solution-layers.17}}</h4>
<pre style="font-size: 0.6em; line-height: 1.4;"><code class="language-text">.ai/
├── README.md
├── specs/          # Contratos e schemas
│   ├── contracts/
│   ├── api/
│   └── schemas/
├── rules/          # Regras declarativas
├── agents/         # Agentes especializados
├── skills/         # Skills reutilizáveis
├── harness/        # Scripts de execução
│   ├── pre-execution/
│   ├── execution/
│   └── post-execution/
├── gates/          # Gates de qualidade
├── governance/     # Governança e políticas
└── knowledge/      # Base de conhecimento</code></pre>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 20px; color: var(--muted); font-size: 0.8em;">
                {{$solution-layers.18}}
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">{{$solution-layers.19}}</span>
              <h2>{{$solution-layers.20}}</h2>
              <div class="stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
                <div class="stat-card fragment fade-up">
                  <div class="value">{{$solution-layers.21}}</div>
                  <div class="muted">{{$solution-layers.22}}</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">{{$solution-layers.23}}</div>
                  <div class="muted">{{$solution-layers.24}}</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">{{$solution-layers.25}}</div>
                  <div class="muted">{{$solution-layers.26}}</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">{{$solution-layers.27}}</div>
                  <div class="muted">{{$solution-layers.28}}</div>
                </div>
              </div>
            </section>
          </section>`,
  `<section>
            <section data-auto-animate>
              <span class="eyebrow">{{$layer1-specify.0}}</span>
              <h2>{{$layer1-specify.1}}</h2>
              <div style="max-width: 1000px; margin: 0 auto;">
                <div class="card fragment fade-up">
                  <h4>{{$layer1-specify.2}}</h4>
                  <ul style="font-size: 0.9em;">
                    <li><strong>{{$layer1-specify.3}}</strong> {{$layer1-specify.4}}</li>
                    <li><strong>{{$layer1-specify.5}}</strong> {{$layer1-specify.6}}</li>
                    <li><strong>{{$layer1-specify.7}}</strong> {{$layer1-specify.8}}</li>
                    <li><strong>{{$layer1-specify.9}}</strong> {{$layer1-specify.10}}</li>
                  </ul>
                </div>
                <div class="callout fragment fade-up" style="margin-top: 20px;">
                  <h4>{{$layer1-specify.11}}</h4>
                  <p>{{$layer1-specify.12}}</p>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 30px; color: var(--muted); font-size: 0.8em;">
                {{$layer1-specify.13}}
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">{{$layer1-specify.14}}</span>
              <h2>{{$layer1-specify.15}} <code>screen.contract.json</code></h2>
              <div style="max-width: 900px; margin: 0 auto;">
                <div class="card">
<pre style="font-size: 0.55em; line-height: 1.4;"><code class="language-json">{
  "required": ["structure", "properties", "methods"],
  "properties": {
    "structure": {
      "properties": {
        "type": { "const": "struct" },
        "name": { "pattern": "^[A-Z][A-Za-z0-9]*Screen$" }
      }
    },
    "properties": {
      "viewModel": {
        "properties": {
          "wrapper": { "const": "@ObservedObject" }
        }
      }
    }
  }
}</code></pre>
                </div>
                <div class="chip-row fragment fade-up" style="margin-top: 20px; justify-content: center;">
                  <span class="chip">{{$layer1-specify.16}}</span>
                  <span class="chip">{{$layer1-specify.17}}</span>
                  <span class="chip">{{$layer1-specify.18}}</span>
                </div>
              </div>
            </section>
          </section>`,
  `<section>
            <span class="eyebrow">{{$layer2-design.0}}</span>
            <h2>{{$layer2-design.1}}</h2>
            <div class="split">
              <div class="card fragment fade-right">
                <h4>{{$layer2-design.2}}</h4>
                <ul>
                  <li><strong>{{$layer2-design.3}}</strong> {{$layer2-design.4}}</li>
                  <li><strong>{{$layer2-design.5}}</strong> {{$layer2-design.6}}</li>
                  <li><strong>{{$layer2-design.7}}</strong> {{$layer2-design.8}} <code>feature-implementation</code> {{$layer2-design.9}}</li>
                  <li><strong>{{$layer2-design.10}}</strong> {{$layer2-design.11}}</li>
                </ul>
                <div class="callout">
                  <h4>{{$layer2-design.12}}</h4>
                  <p>{{$layer2-design.13}}</p>
                </div>
              </div>
              <div class="fragment fade-left">
                <h4>{{$layer2-design.14}}</h4>
<pre><code class="language-yaml"># .ai/agents/feature-implementation.agent.md
name: feature-implementation
read_and_follow:
  - .ai/skills/feature-implementation/SKILL.md
focus:
  - architecture patterns
  - required tests
  - validation evidence

# .ai/skills/feature-implementation/agents/openai.yaml
interface:
  display_name: "Feature Implementation"
  short_description: "Implement new capabilities with quality gates"</code></pre>
                <p class="muted">{{$layer2-design.15}}</p>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$layer3-tasks.0}}</span>
            <h2>{{$layer3-tasks.1}}</h2>
            <div class="split">
              <div class="card fragment fade-right">
                <h4>{{$layer3-tasks.2}}</h4>
                <ul>
                  <li><strong>{{$layer3-tasks.3}}</strong> {{$layer3-tasks.4}}</li>
                  <li><strong>{{$layer3-tasks.5}}</strong> {{$layer3-tasks.6}}</li>
                  <li><strong>{{$layer3-tasks.7}}</strong> {{$layer3-tasks.8}}</li>
                  <li><strong>{{$layer3-tasks.9}}</strong> {{$layer3-tasks.10}}</li>
                </ul>
                <div class="callout">
                  <h4>{{$layer3-tasks.11}}</h4>
                  <p>{{$layer3-tasks.12}}</p>
                </div>
              </div>
              <div class="fragment fade-left">
                <h4>{{$layer3-tasks.13}}</h4>
<pre><code class="language-text">Implementation Agent → submits → Validation Agent
                               ├─ Load contracts
                               ├─ Load rules
                               ├─ Run checks
                               └─ Report violations</code></pre>
                <div class="chip-row">
                  <span class="chip">{{$layer3-tasks.14}}</span>
                  <span class="chip">{{$layer3-tasks.15}}</span>
                  <span class="chip">{{$layer3-tasks.16}}</span>
                </div>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$layer4-execute.0}}</span>
            <h2>{{$layer4-execute.1}}</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>{{$layer4-execute.2}}</h4>
                <ul>
                  <li><strong>{{$layer4-execute.3}}</strong> {{$layer4-execute.4}}</li>
                  <li><strong>{{$layer4-execute.5}}</strong> {{$layer4-execute.6}}</li>
                  <li><strong>{{$layer4-execute.7}}</strong> {{$layer4-execute.8}}</li>
                  <li><strong>{{$layer4-execute.9}}</strong> {{$layer4-execute.10}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$layer4-execute.11}}</h4>
<pre><code class="language-bash">validate_contracts.sh

validate_naming "$file" "^[A-Z][A-Za-z0-9]*(Screen|ViewModel)$"
validate_layering "$file" "presentation"
validate_architecture_compliance "$file"

if [ $VIOLATIONS -eq 0 ]; then
  echo "✅ All contracts validated successfully"
else
  echo "❌ Fix violations before merge"
  exit 1
fi</code></pre>
                <ul>
                  <li><strong>{{$layer4-execute.12}}</strong> {{$layer4-execute.13}}</li>
                  <li><strong>{{$layer4-execute.14}}</strong> {{$layer4-execute.15}}</li>
                  <li><strong>{{$layer4-execute.16}}</strong> {{$layer4-execute.17}}</li>
                </ul>
              </div>
            </div>
            <div class="stats" style="margin-top: 18px;">
              <div class="stat-card fragment fade-up"><div class="value">{{$layer4-execute.18}}</div><div class="muted">{{$layer4-execute.19}}</div></div>
              <div class="stat-card fragment fade-up"><div class="value">{{$layer4-execute.20}}</div><div class="muted">{{$layer4-execute.21}}</div></div>
              <div class="stat-card fragment fade-up"><div class="value">{{$layer4-execute.22}}</div><div class="muted">{{$layer4-execute.23}}</div></div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$e2e-example.0}}</span>
            <h2>{{$e2e-example.1}}</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$e2e-example.2}}</div>
                <h4>{{$e2e-example.3}}</h4>
                <p>{{$e2e-example.4}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$e2e-example.5}}</div>
                <h4>{{$e2e-example.6}}</h4>
                <p>{{$e2e-example.7}} <code>feature-implementation</code> {{$e2e-example.8}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$e2e-example.9}}</div>
                <h4>{{$e2e-example.10}}</h4>
                <p>{{$e2e-example.11}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$e2e-example.12}}</div>
                <h4>{{$e2e-example.13}}</h4>
                <p>{{$e2e-example.14}}</p>
              </div>
            </div>
            <div class="chip-row" style="margin-top: 18px; justify-content: center;">
              <span class="badge success">{{$e2e-example.15}}</span>
              <span class="badge success">{{$e2e-example.16}}</span>
              <span class="badge success">{{$e2e-example.17}}</span>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$benefits.0}}</span>
            <h2>{{$benefits.1}}</h2>
            <div class="grid-3">
              <div class="card fragment fade-up"><h4>{{$benefits.2}}</h4><p>{{$benefits.3}}</p></div>
              <div class="card fragment fade-up"><h4>{{$benefits.4}}</h4><p>{{$benefits.5}}</p></div>
              <div class="card fragment fade-up"><h4>{{$benefits.6}}</h4><p>{{$benefits.7}}</p></div>
              <div class="card fragment fade-up"><h4>{{$benefits.8}}</h4><p>{{$benefits.9}}</p></div>
              <div class="card fragment fade-up"><h4>{{$benefits.10}}</h4><p>{{$benefits.11}}</p></div>
              <div class="card fragment fade-up"><h4>{{$benefits.12}}</h4><p>{{$benefits.13}}</p></div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$tradeoffs-costs.0}}</span>
            <h2>{{$tradeoffs-costs.1}}</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>{{$tradeoffs-costs.2}}</h4>
                <ul>
                  <li>{{$tradeoffs-costs.3}}</li>
                  <li>{{$tradeoffs-costs.4}}</li>
                  <li>{{$tradeoffs-costs.5}}</li>
                  <li>{{$tradeoffs-costs.6}}</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>{{$tradeoffs-costs.7}}</h4>
                <ul>
                  <li><strong>{{$tradeoffs-costs.8}}</strong> {{$tradeoffs-costs.9}}</li>
                  <li><strong>{{$tradeoffs-costs.10}}</strong> {{$tradeoffs-costs.11}}</li>
                  <li><strong>{{$tradeoffs-costs.12}}</strong> {{$tradeoffs-costs.13}}</li>
                  <li><strong>{{$tradeoffs-costs.14}}</strong> {{$tradeoffs-costs.15}}</li>
                </ul>
              </div>
            </div>
          </section>`,
  `<section>
            <span class="eyebrow">{{$how-to-start.0}}</span>
            <h2>{{$how-to-start.1}}</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$how-to-start.2}}</div>
                <h4>{{$how-to-start.3}}</h4>
                <p>{{$how-to-start.4}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$how-to-start.5}}</div>
                <h4>{{$how-to-start.6}}</h4>
                <p>{{$how-to-start.7}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$how-to-start.8}}</div>
                <h4>{{$how-to-start.9}}</h4>
                <p>{{$how-to-start.10}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$how-to-start.11}}</div>
                <h4>{{$how-to-start.12}}</h4>
                <p>{{$how-to-start.13}}</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">{{$how-to-start.14}}</div>
                <h4>{{$how-to-start.15}}</h4>
                <p>{{$how-to-start.16}}</p>
              </div>
            </div>
          </section>`,
  `<section>
            <div class="qa">
              <div>
                <span class="eyebrow">{{$qa-summary.0}}</span>
                <div class="hero-question">{{$qa-summary.1}}</div>
                <p class="subtitle" style="max-width: 100%; margin: 18px auto 0; text-align: center;">{{$qa-summary.2}}</p>
                <div class="chip-row" style="justify-content: center; margin-top: 24px;">
                  <span class="chip">{{$qa-summary.3}}</span>
                  <span class="chip">{{$qa-summary.4}}</span>
                  <span class="chip">{{$qa-summary.5}}</span>
                  <span class="chip">{{$qa-summary.6}}</span>
                </div>
                <p style="margin-top: 36px; font-size: 0.7em; color: var(--muted); text-align: center;">{{$qa-summary.7}} <strong style="color: var(--text-strong);">{{$qa-summary.8}}</strong></p>
              </div>
            </div>
          </section>`
];
