/**
 * PT-BR slide content and metadata.
 * Each entry in `slides` is a Reveal.js section HTML string.
 */
export const locale = 'pt-BR';

export const translations = {
  htmlLang: 'pt-BR',
        title: 'Desenvolvimento Assistido por IA',
        metaDescription: 'Apresentação Reveal.js sobre desenvolvimento assistido por IA para pessoas desenvolvedoras iniciantes no tema.',
        selectorLabel: 'Idioma',
        footer: 'Dica: pressione <strong>S</strong> para a visão do apresentador, <strong>F</strong> para tela cheia, ou use <strong>?print-pdf</strong> para impressão.',
        slides: [
          `<section>
            <div class="hero">
              <div>
                <span class="eyebrow">🤝 Engenharia com IA</span>
                <h1>Desenvolvimento Assistido por IA</h1>
                <div class="accent-line"></div>
                <p class="subtitle">Uma visão prática para quem está começando: o que a IA faz bem, onde ela erra, como orientar melhor e como validar sem perder qualidade.</p>
                <div class="chip-row">
                  <span class="chip">🇧🇷 Conteúdo em PT-BR</span>
                  <span class="chip">🧭 Passo a passo real</span>
                  <span class="chip">✅ Contratos + validação</span>
                  <span class="chip">🛠️ Exemplos antes/depois</span>
                </div>
              </div>
              <div class="panel">
                <h3>Para quem é esta apresentação?</h3>
                <p>Pessoas desenvolvedoras, líderes técnicos, QA e product managers que querem usar IA de forma segura e útil — sem depender de mágica.</p>
                <div class="stats">
                  <div class="stat-card fragment fade-up">
                    <div class="value">1ª semana</div>
                    <div class="muted">Foco em tarefas pequenas, repetitivas e bem definidas</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">2x–4x</div>
                    <div class="muted">Ganho comum em rascunho inicial quando o pedido está claro</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">0%</div>
                    <div class="muted">De redução na responsabilidade humana por arquitetura, risco e release</div>
                  </div>
                  <div class="stat-card fragment fade-up">
                    <div class="value">Maior valor</div>
                    <div class="muted">Quando prompt, contexto, exemplos e testes estão alinhados</div>
                  </div>
                </div>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🎯 Por que isso importa?</span>
            <h2>O problema não é “escrever código”. É entregar mudança confiável.</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>Sem assistência estruturada</h4>
                <ul>
                  <li>Tempo perdido com boilerplate, testes repetitivos e documentação atrasada.</li>
                  <li>Contexto fica espalhado entre ticket, chat, wiki e PR.</li>
                  <li>Mais risco de esquecer validações, regras de negócio e cenários de borda.</li>
                  <li>A pressão por velocidade vira atalho — e o retrabalho cresce.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Com assistência bem guiada</h4>
                <ul>
                  <li>A IA acelera rascunhos, testes, refactors e documentação.</li>
                  <li>O time explicita contexto, critérios e contratos logo no início.</li>
                  <li>A validação fica mais forte: testes, linters, contratos e revisão independente.</li>
                  <li>O ganho real aparece em throughput validado, não em linhas de código.</li>
                </ul>
              </div>
            </div>
            <p class="quote fragment fade-up">Desenvolvimento assistido por IA não é “delegar para a IA”. É usar a IA como uma parceira de execução dentro de um processo disciplinado.</p>
          </section>`,
          `<section>
            <span class="eyebrow">📚 Fundamentals</span>
            <h2>Quatro conceitos que destravam o tema para iniciantes</h2>
            <div class="grid-4">
              <div class="card fragment fade-up">
                <h4>🤖 O que é um agente de IA?</h4>
                <p>Pense em um <strong>estagiário muito rápido</strong>: ele produz bastante, mas precisa de objetivo claro, contexto, limites e revisão.</p>
              </div>
              <div class="card fragment fade-up">
                <h4>💬 O que é um prompt?</h4>
                <p>É a instrução de trabalho. Quanto melhor o pedido, maior a chance de receber algo útil, reproduzível e fácil de validar.</p>
              </div>
              <div class="card fragment fade-up">
                <h4>📐 Contratos + validação</h4>
                <p>São as regras do jogo: schema, exemplos, critérios de aceite, testes e checagens automáticas que dizem o que está certo.</p>
              </div>
              <div class="card fragment fade-up">
                <h4>🧠 Escrita por IA ≠ desenvolvimento assistido</h4>
                <p>Gerar código é só uma etapa. Desenvolvimento assistido inclui contexto, restrições, verificação e decisão humana.</p>
              </div>
            </div>
            <div class="compare" style="margin-top: 18px;">
              <div class="card fragment fade-right">
                <h4>“IA escrevendo código”</h4>
                <ul>
                  <li>Pedido vago</li>
                  <li>Resposta rápida</li>
                  <li>Pouca rastreabilidade</li>
                  <li>Fácil parecer certo e estar errado</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>“Desenvolvimento assistido por IA”</h4>
                <ul>
                  <li>Pedido + contexto + contrato</li>
                  <li>Resposta iterativa</li>
                  <li>Testes e evidências</li>
                  <li>Humano decide o que entra em produção</li>
                </ul>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🕸️ Conceito visual</span>
            <h2>Como agentes, contratos e validação trabalham juntos</h2>
            <div class="diagram">
              <div class="agent-flow">
                <div class="agent-node fragment fade-up"><h4>📝 Pessoa desenvolvedora</h4><p>Define objetivo, contexto, limites, arquivos afetados e critérios de aceite.</p></div>
                <div class="agent-node fragment fade-up"><h4>🤖 Agente de execução</h4><p>Rascunha código, testes, docs e sugere próximos passos.</p></div>
                <div class="agent-node fragment fade-up"><h4>📐 Contratos</h4><p>OpenAPI, schema, exemplos, convenções do time e definição de pronto.</p></div>
                <div class="agent-node fragment fade-up"><h4>✅ Validação</h4><p>Lint, testes, revisão humana, revisão automatizada e comparação com o esperado.</p></div>
                <div class="agent-node fragment fade-up"><h4>🚀 Entrega</h4><p>Somente o que passou pelos critérios vira PR, merge e release.</p></div>
              </div>
            </div>
            <div class="grid-3" style="margin-top: 18px;">
              <div class="card fragment"><h4>Por que contratos importam?</h4><p>Sem contrato, a IA preenche lacunas “adivinhando”. Com contrato, ela trabalha sobre algo verificável.</p></div>
              <div class="card fragment"><h4>Por que separar geração e validação?</h4><p>Quem cria a resposta não deve ser o único juiz da própria resposta.</p></div>
              <div class="card fragment"><h4>Por que ainda existe revisão humana?</h4><p>Porque risco, contexto do negócio, trade-offs e priorização continuam sendo responsabilidade do time.</p></div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🧭 Step-by-Step Walkthrough</span>
            <h2>Como uma pessoa desenvolvedora realmente usaria esse modelo</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">1</div>
                <h4>Escolha uma tarefa pequena</h4>
                <p>Ex.: ajustar validação em ViewModel, criar teste unitário XCTest, adicionar UseCase simples.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">2</div>
                <h4>Monte o contexto mínimo</h4>
                <p>Arquivos relevantes, regra de negócio, formato esperado, restrições técnicas e exemplos.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">3</div>
                <h4>Peça um primeiro rascunho</h4>
                <p>Prompt objetivo, com limites claros: o que pode mudar, o que não pode e como validar.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">4</div>
                <h4>Itere com evidência</h4>
                <p>Peça correções com base em erro real, teste falhando, diff específico ou lacuna observada.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">5</div>
                <h4>Valide antes de aceitar</h4>
                <p>Revise o diff, rode testes, confirme critérios de aceite e registre o que foi aprendido.</p>
              </div>
            </div>
            <div class="callout fragment fade-up" style="margin-top: 18px;">
              <h4>Por que esse fluxo funciona?</h4>
              <p>Porque ele transforma um pedido subjetivo em um ciclo observável: intenção → geração → evidência → ajuste → aceite.</p>
            </div>
          </section>`,
          `<section>
            <section data-auto-animate>
              <span class="eyebrow">💻 Antes / Depois</span>
              <h2>Exemplo prático: iOS com IA</h2>
              <div style="max-width: 1100px; margin: 0 auto;">
                <div class="split" style="gap: 20px;">
                  <div class="conversation fragment fade-right" style="font-size: 0.85em;">
                    <h4 style="font-size: 1.1em; margin-bottom: 12px;">Conversa com IA</h4>
                    <div class="message user" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>Dev iOS</strong>
                      Adicione validação no ViewModel de cadastro. Valide email válido e senha com 8+ caracteres, mantenha MVVM-C, escreva testes XCTest.
                    </div>
                    <div class="message ai" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>IA</strong>
                      Vou criar <code>validateRegistration()</code> no ViewModel, retornar estados de erro específicos e cobrir os cenários com XCTest.
                    </div>
                    <div class="message user fragment" style="padding: 10px 14px; margin-bottom: 10px;">
                      <strong>Dev iOS</strong>
                      Exponha estados via <code>@Published</code> para binding no SwiftUI.
                    </div>
                    <div class="message ai fragment" style="padding: 10px 14px;">
                      <strong>IA</strong>
                      Adicionei <code>@Published var validationError</code> e alinhei com apresentação de alert.
                    </div>
                  </div>
                  <div class="card fragment fade-left" style="font-size: 0.85em;">
                    <h4 style="font-size: 1.1em; margin-bottom: 12px;">Por que funciona?</h4>
                    <ul style="font-size: 0.95em; line-height: 1.5; margin: 0;">
                      <li style="margin-bottom: 8px;"><strong>Escopo:</strong> só ViewModel, não mexe em View/UseCase.</li>
                      <li style="margin-bottom: 8px;"><strong>Arquitetura:</strong> mantém MVVM-C.</li>
                      <li style="margin-bottom: 8px;"><strong>Testes:</strong> evidência via XCTest.</li>
                      <li><strong>Binding:</strong> SwiftUI direto via <code>@Published</code>.</li>
                    </ul>
                    <div class="chip-row" style="margin-top: 14px; gap: 8px;">
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">🔒 Escopo limitado</span>
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">🧪 Testes XCTest</span>
                      <span class="chip" style="font-size: 0.75em; padding: 6px 12px;">🏗️ MVVM-C</span>
                    </div>
                  </div>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 24px; color: var(--muted); font-size: 0.8em;">
                ↓ Veja o código antes/depois
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">💻 Antes / Depois</span>
              <h2>Código iOS: Validação no ViewModel</h2>
              <div style="max-width: 1100px; margin: 0 auto;">
                <div class="grid-2" style="gap: 18px;">
                  <div class="card fragment fade-right">
                    <h4 style="font-size: 1.05em;">❌ Antes: sem validação</h4>
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
                    <p class="muted" style="font-size: 0.8em; margin-top: 10px;">Problema: aceita valores inválidos.</p>
                  </div>
                  <div class="card fragment fade-left">
                    <h4 style="font-size: 1.05em;">✅ Depois: com validação</h4>
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
                    <p class="muted" style="font-size: 0.8em; margin-top: 10px;">Melhoria: validação + binding para alert.</p>
                  </div>
                </div>
              </div>
            </section>
          </section>`,
          `<section>
            <span class="eyebrow">⚠️ Erros comuns</span>
            <h2>Onde iniciantes costumam tropeçar — e como evitar</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>Erros frequentes</h4>
                <ul>
                  <li>“Faça isso para mim” sem contexto, arquivos, regras ou definição de pronto.</li>
                  <li>Aceitar a primeira resposta só porque ela compila ou parece elegante.</li>
                  <li>Pedir uma mudança grande demais logo de cara.</li>
                  <li>Não informar limites: segurança, arquitetura, padrões do time, performance.</li>
                  <li>Usar IA para decidir regra de negócio que o time ainda não definiu.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Dicas para prompts melhores</h4>
                <ul>
                  <li><strong>Contexto:</strong> diga o objetivo, os arquivos e a regra de negócio.</li>
                  <li><strong>Restrições:</strong> informe o que não pode mudar.</li>
                  <li><strong>Evidência:</strong> peça testes, cenários e critérios de aceite.</li>
                  <li><strong>Formato:</strong> peça diff, checklist, plano ou explicação curta.</li>
                  <li><strong>Iteração:</strong> corrija com base em fatos, não em “tenta de novo”.</li>
                </ul>
              </div>
            </div>
            <div class="compare" style="margin-top: 18px;">
              <div class="card fragment fade-right">
                <h4>Prompt fraco</h4>
<pre><code class="language-markdown">Crie a feature de tarefas.</code></pre>
              </div>
              <div class="card fragment fade-left">
                <h4>Prompt melhor</h4>
<pre><code class="language-markdown">Implemente a validação do POST /tasks.
Contexto: handler em taskController.js e testes em taskController.test.js.
Restrições: não mude o contrato da API nem a camada de persistência.
Aceite: retornar 400 para título vazio e prioridade inválida.
Entrega: diff + testes + breve justificativa das decisões.</code></pre>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🚀 Getting Started</span>
            <h2>Primeiros 5 passos para começar de forma segura</h2>
            <div class="checklist">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">1</div>
                <h4>Escolha um caso de baixo risco</h4>
                <p>Por exemplo: ajustar validação em ViewModel, criar teste unitário XCTest, adicionar função de UseCase simples.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">2</div>
                <h4>Defina um contrato mínimo</h4>
                <p>Payload, critérios de aceite, exemplos de entrada e saída, ou pelo menos uma checklist.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">3</div>
                <h4>Monte um prompt reutilizável</h4>
                <p>Guarde um template com objetivo, contexto, restrições, evidência e formato de entrega.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">4</div>
                <h4>Valide sempre do mesmo jeito</h4>
                <p>Diff, lint, testes, checklist de revisão e critérios de aceite explícitos.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">5</div>
                <h4>Capture o aprendizado</h4>
                <p>Anote quais prompts funcionaram, onde a IA errou e quais guardrails faltaram.</p>
              </div>
            </div>
            <div class="callout fragment fade-up" style="margin-top: 18px;">
              <h4>Regra prática</h4>
              <p>Comece com <strong>pequenas entregas repetíveis</strong>. Escalar cedo demais costuma gerar falsa confiança e retrabalho.</p>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">📈 Primeira semana</span>
            <h2>O que esperar e como medir se está funcionando</h2>
            <div class="metric-grid">
              <div class="card fragment fade-up">
                <h4>Expectativa realista</h4>
                <p>Você vai ganhar velocidade em rascunho, mas ainda gastar tempo aprendendo a pedir melhor e revisar melhor.</p>
              </div>
              <div class="card fragment fade-up">
                <h4>Sinal positivo</h4>
                <p>Mais clareza no problema, mais testes saindo junto e menos tempo em tarefas repetitivas.</p>
              </div>
              <div class="card fragment fade-up">
                <h4>Sinal de alerta</h4>
                <p>Muito texto gerado, pouca validação, PRs barulhentos e sensação de que o time está “apagando incêndio”.</p>
              </div>
            </div>
            <table class="metric-table fragment fade-up">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Como observar</th>
                  <th>Interpretação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tempo até o primeiro rascunho útil</td>
                  <td>Minutos entre abrir a tarefa e ter algo revisável</td>
                  <td>Deve cair rápido nas tarefas bem definidas</td>
                </tr>
                <tr>
                  <td>Retrabalho após revisão</td>
                  <td>Número de correções relevantes por PR</td>
                  <td>Se sobe muito, o prompt ou o contrato estão fracos</td>
                </tr>
                <tr>
                  <td>Testes adicionados por mudança</td>
                  <td>Quantidade e relevância dos cenários cobertos</td>
                  <td>Bom uso de IA aumenta evidência, não só produção</td>
                </tr>
                <tr>
                  <td>Lead time de tarefas repetitivas</td>
                  <td>Comparação antes/depois em issues parecidas</td>
                  <td>Melhora real aparece em tarefas frequentes</td>
                </tr>
              </tbody>
            </table>
          </section>`,
          `<section>
            <span class="eyebrow">🏗️ Modelo operacional</span>
            <h2>Framework recomendado para um time iniciante</h2>
            <div class="diagram">
              <div class="flow">
                <div class="flow-box fragment fade-up"><h4>1. Tarefa bem definida</h4><p>Objetivo, contexto, critérios de aceite e risco conhecido.</p></div>
                <div class="flow-box fragment fade-up"><h4>2. Prompt com contrato</h4><p>Instrução clara, limites técnicos e evidência esperada.</p></div>
                <div class="flow-box fragment fade-up"><h4>3. Agente executa</h4><p>Gera proposta de código, testes, documentação ou revisão.</p></div>
                <div class="flow-box fragment fade-up"><h4>4. Validadores independentes</h4><p>Testes, lint, review automatizado, checklist humana.</p></div>
                <div class="flow-box fragment fade-up"><h4>5. Time aprende</h4><p>Ajusta templates, melhora prompts e reduz erro recorrente.</p></div>
              </div>
            </div>
            <div class="grid-3" style="margin-top: 18px;">
              <div class="card fragment"><h4>🙋 Papel da pessoa desenvolvedora</h4><p>Definir problema, decidir trade-offs, revisar o diff e assumir a entrega.</p></div>
              <div class="card fragment"><h4>🤖 Papel da IA</h4><p>Acelerar execução, sugerir alternativas e reduzir trabalho repetitivo.</p></div>
              <div class="card fragment"><h4>🛡️ Papel do processo</h4><p>Evitar que velocidade vire erro caro por falta de validação.</p></div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">⚖️ Trade-offs e boas práticas</span>
            <h2>O que times maduros fazem diferente</h2>
            <div class="grid-2">
              <div class="card fragment fade-right">
                <h4>Boas práticas</h4>
                <ul>
                  <li>Começam por problemas bem delimitados.</li>
                  <li>Usam templates de prompt e checklists de validação.</li>
                  <li>Separam geração, revisão e aceite.</li>
                  <li>Medem throughput validado e taxa de retrabalho.</li>
                  <li>Tratam prompt e contrato como ativos do time.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Trade-offs reais</h4>
                <ul>
                  <li>Mais velocidade inicial pode exigir mais disciplina de revisão.</li>
                  <li>Prompts ruins escalam erro mais rápido.</li>
                  <li>Sem contrato, a IA parece criativa; com contrato, ela fica confiável.</li>
                  <li>O ROI cai quando o trabalho é ambíguo ou a validação é fraca.</li>
                  <li>O maior ganho costuma vir de documentação, testes e tarefas repetíveis.</li>
                </ul>
              </div>
            </div>
            <p class="quote fragment fade-up">Pergunta-chave para o time: <strong>“Estamos ficando mais rápidos com a mesma confiança — ou só mais rápidos para gerar retrabalho?”</strong></p>
          </section>`,          `<section>
            <span class="eyebrow">🧩 Parte 2</span>
            <h2>Part 2: AI-Driven Development Architecture</h2>
            <div class="hero">
              <div>
                <p class="subtitle">Nesta parte, a proposta é mostrar como times podem estruturar a adoção de IA de forma previsível: introdução dos conceitos, arquitetura em camadas, abordagem orientada por especificação e validação por harness.</p>
                <div class="chip-row">
                  <span class="chip">🧠 Conceitos fundamentais</span>
                  <span class="chip">🏗️ Arquitetura em camadas</span>
                  <span class="chip">📐 Abordagem spec-driven</span>
                  <span class="chip">🧪 Harness de validação</span>
                </div>
              </div>
              <div class="panel">
                <h3>O que vamos cobrir</h3>
                <div class="grid-2" style="margin-top: 12px;">
                  <div class="mini-card fragment fade-up"><div class="value">1</div><div class="muted">Por que a interação com IA quebra sem estrutura</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">2</div><div class="muted">Arquitetura proposta em 4 camadas para adoção</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">3</div><div class="muted">Como validar com contratos, agentes e gates</div></div>
                  <div class="mini-card fragment fade-up"><div class="value">4</div><div class="muted">Benefícios, trade-offs e caminho prático de adoção</div></div>
                </div>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">⚠️ O problema</span>
            <h2>Sem arquitetura, a adoção de IA tende a ser inconsistente e difícil de escalar</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>Estado atual mais comum</h4>
                <ul>
                  <li>Documentação espalhada entre wiki, PRs, exemplos antigos e mensagens soltas.</li>
                  <li>Cada pessoa interage com IA de um jeito diferente, sem padrão compartilhado.</li>
                  <li>Não existe enforcement automático para arquitetura, testes ou convenções.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Dor operacional</h4>
                <ul>
                  <li>Review manual vira gargalo de qualidade.</li>
                  <li>Resultados gerados pela IA ficam inconsistentes entre tarefas parecidas.</li>
                  <li>Conhecimento crítico permanece tribal, não estruturado.</li>
                </ul>
              </div>
            </div>
            <div class="stats" style="margin-top: 18px;">
              <div class="stat-card fragment fade-up"><div class="value">Tempo</div><div class="muted">Mais ciclos de revisão e retrabalho para alinhar o output.</div></div>
              <div class="stat-card fragment fade-up"><div class="value">Bugs</div><div class="muted">Falhas repetidas escapam quando não há validação objetiva.</div></div>
              <div class="stat-card fragment fade-up"><div class="value">Dívida técnica</div><div class="muted">Padrões se degradam quando cada entrega segue um caminho diferente.</div></div>
            </div>
          </section>`,
          `<section>
            <section data-auto-animate>
              <span class="eyebrow">🏗️ Solução proposta</span>
              <h2>Uma arquitetura em 4 camadas para tornar IA estruturada, declarativa, auditável e enforceable</h2>
              <div class="diagram">
                <div class="flow" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>1. Specify</h4>
                    <p><code>.ai/specs/</code> + <code>.ai/rules/</code><br>Define o que deve ser verdade.</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>2. Design</h4>
                    <p><code>.ai/agents/</code> + <code>.ai/skills/</code><br>Define como a IA deve trabalhar.</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>3. Tasks</h4>
                    <p>Validação independente<br>Separa execução de julgamento.</p>
                  </div>
                  <div class="flow-box fragment fade-up" style="min-height: 120px;">
                    <h4>4. Execute</h4>
                    <p><code>.ai/harness/</code> + <code>.ai/gates/</code><br>Executa checks e bloqueia violações.</p>
                  </div>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 30px; color: var(--muted); font-size: 0.8em;">
                ↓ Veja a estrutura de pastas proposta
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">🏗️ Estrutura proposta</span>
              <h2>Organização da pasta <code>.ai/</code></h2>
              <div style="display: grid; grid-template-columns: 1fr; gap: 20px; max-width: 900px; margin: 0 auto;">
                <div class="card">
                  <h4>Estrutura de pastas</h4>
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
                ↓ Veja os benefícios desta abordagem
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">🏗️ Benefícios da arquitetura</span>
              <h2>Por que esta estrutura funciona</h2>
              <div class="stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
                <div class="stat-card fragment fade-up">
                  <div class="value">Estruturada</div>
                  <div class="muted">Responsabilidades explícitas e fáceis de localizar.</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">Declarativa</div>
                  <div class="muted">Regras e contratos descrevem o que precisa acontecer.</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">Auditável</div>
                  <div class="muted">É possível rastrear agente, regra, gate e evidência.</div>
                </div>
                <div class="stat-card fragment fade-up">
                  <div class="value">Enforceable</div>
                  <div class="muted">Adoção deixa de depender só de boa vontade e passa a ter bloqueios objetivos.</div>
                </div>
              </div>
            </section>
          </section>`,
          `<section>
            <section data-auto-animate>
              <span class="eyebrow">1️⃣ Layer 1 · SPECIFY</span>
              <h2>Spec-driven development começa definindo contratos e regras antes da execução</h2>
              <div style="max-width: 1000px; margin: 0 auto;">
                <div class="card fragment fade-up">
                  <h4>O que é e por que importa</h4>
                  <ul style="font-size: 0.9em;">
                    <li><strong>O que é:</strong> contratos em JSON Schema e regras em YAML.</li>
                    <li><strong>Por que:</strong> validação declarativa, feedback rápido e menos ambiguidade.</li>
                    <li><strong>Exemplo:</strong> contratos de Screen e ViewModel descrevem nome e responsabilidades.</li>
                    <li><strong>Indústria:</strong> OpenAPI, JSON Schema e desenvolvimento contract-first.</li>
                  </ul>
                </div>
                <div class="callout fragment fade-up" style="margin-top: 20px;">
                  <h4>Exemplo de regra</h4>
                  <p>Uma screen declarativa deve expor estado observado, delegar regras de negócio para um ViewModel e evitar lógica de domínio na camada visual.</p>
                </div>
              </div>
              <p class="fragment fade-up" style="text-align: center; margin-top: 30px; color: var(--muted); font-size: 0.8em;">
                ↓ Veja um exemplo prático de contrato
              </p>
            </section>
            
            <section data-auto-animate>
              <span class="eyebrow">1️⃣ Layer 1 · SPECIFY</span>
              <h2>Exemplo de contrato: <code>screen.contract.json</code></h2>
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
                  <span class="chip">Contrato descreve forma esperada</span>
                  <span class="chip">YAML adiciona severidade e escopo</span>
                  <span class="chip">Erro vira feedback objetivo</span>
                </div>
              </div>
            </section>
          </section>`,
          `<section>
            <span class="eyebrow">2️⃣ Layer 2 · DESIGN</span>
            <h2>Agentes e skills especializam o comportamento da IA para tarefas recorrentes</h2>
            <div class="split">
              <div class="card fragment fade-right">
                <h4>O que é e por que importa</h4>
                <ul>
                  <li><strong>O que é:</strong> agentes customizados e skills focadas por tipo de trabalho.</li>
                  <li><strong>Por que:</strong> consistência, reuso e preservação de contexto operacional.</li>
                  <li><strong>Exemplo genérico:</strong> um agente <code>feature-implementation</code> segue checklist de arquitetura, testes e evidências.</li>
                  <li><strong>Prática de mercado:</strong> sistemas multiagente, workflow automation e playbooks operacionais.</li>
                </ul>
                <div class="callout">
                  <h4>Ideia central</h4>
                  <p>Em vez de reescrever prompts do zero a cada tarefa, o time encapsula comportamento esperado, referências obrigatórias e formato de saída.</p>
                </div>
              </div>
              <div class="fragment fade-left">
                <h4>Exemplo proposto: agent wrapper + binding</h4>
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
                <p class="muted">Esse desenho ajuda times a transformar conhecimento operacional em um ativo reutilizável, em vez de depender de memória individual.</p>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">3️⃣ Layer 3 · TASKS</span>
            <h2>Execução e julgamento independentes aumentam imparcialidade e qualidade</h2>
            <div class="split">
              <div class="card fragment fade-right">
                <h4>O que é e por que importa</h4>
                <ul>
                  <li><strong>O que é:</strong> subagentes ou fluxos de validação executados sem compartilhar contexto da implementação.</li>
                  <li><strong>Por que:</strong> reduz viés de confirmação e permite validação paralela.</li>
                  <li><strong>Exemplo genérico:</strong> um validador carrega contratos e regras do zero antes de julgar o output.</li>
                  <li><strong>Prática de mercado:</strong> quality gates, pipelines de CI/CD e segregação entre build e approval.</li>
                </ul>
                <div class="callout">
                  <h4>Princípio útil</h4>
                  <p>Quem executa não deveria ser a única fonte de verdade sobre se o resultado está correto.</p>
                </div>
              </div>
              <div class="fragment fade-left">
                <h4>Fluxo proposto: validação sem contexto compartilhado</h4>
<pre><code class="language-text">Implementation Agent → submits → Validation Agent
                               ├─ Load contracts
                               ├─ Load rules
                               ├─ Run checks
                               └─ Report violations</code></pre>
                <div class="chip-row">
                  <span class="chip">Julgamento imparcial</span>
                  <span class="chip">Validação paralela</span>
                  <span class="chip">Achados reproduzíveis</span>
                </div>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">4️⃣ Layer 4 · EXECUTE</span>
            <h2>Harness e gates transformam intenção em enforcement automático</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>O que é e por que importa</h4>
                <ul>
                  <li><strong>O que é:</strong> scripts, validadores e quality gates executados antes e depois da geração.</li>
                  <li><strong>Por que:</strong> decisões baseadas em evidência, com bloqueio objetivo quando algo viola contratos.</li>
                  <li><strong>Exemplo genérico:</strong> validação de contratos, nomenclatura, camadas arquiteturais e cobertura mínima.</li>
                  <li><strong>Prática de mercado:</strong> linters, static analysis, pre-commit hooks e pipelines automatizados.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Exemplo proposto: execução de checks</h4>
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
                  <li><strong>Contract validation:</strong> garante forma e estrutura esperadas.</li>
                  <li><strong>Architecture compliance:</strong> impede mistura indevida de camadas.</li>
                  <li><strong>Objective blocking:</strong> falha explícita antes de virar PR ou release.</li>
                </ul>
              </div>
            </div>
            <div class="stats" style="margin-top: 18px;">
              <div class="stat-card fragment fade-up"><div class="value">Pre-commit</div><div class="muted">Erro aparece antes de contaminar o branch.</div></div>
              <div class="stat-card fragment fade-up"><div class="value">CI/CD</div><div class="muted">A mesma régua vale para todo o time.</div></div>
              <div class="stat-card fragment fade-up"><div class="value">Evidência</div><div class="muted">Cada bloqueio aponta exatamente o que precisa ser corrigido.</div></div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🔄 Exemplo E2E</span>
            <h2>Fluxo proposto: “Implementar uma payment confirmation screen”</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">1</div>
                <h4>Specify</h4>
                <p>O time define contrato da screen, contrato do ViewModel, critérios de aceite e regras de arquitetura.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">2</div>
                <h4>Design</h4>
                <p>O agente <code>feature-implementation</code> carrega skill, exemplos permitidos e formato esperado de entrega.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">3</div>
                <h4>Tasks</h4>
                <p>Um validador independente revisa estrutura, separação de camadas e aderência às regras sem herdar contexto.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">4</div>
                <h4>Execute</h4>
                <p>Harness roda checks automatizados e publica resultado verificável para o time.</p>
              </div>
            </div>
            <div class="chip-row" style="margin-top: 18px; justify-content: center;">
              <span class="badge success">✅ Screen contract</span>
              <span class="badge success">✅ ViewModel contract</span>
              <span class="badge success">✅ Arch compliance</span>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">✅ Benefícios</span>
            <h2>Por que essa abordagem tende a funcionar melhor do que prompts soltos</h2>
            <div class="grid-3">
              <div class="card fragment fade-up"><h4>⚡ Velocidade</h4><p>Iterações ficam mais rápidas porque a IA opera com contexto e critérios já estruturados.</p></div>
              <div class="card fragment fade-up"><h4>🛡️ Qualidade</h4><p>Validação automatizada captura problemas cedo, antes de review tardio ou regressão.</p></div>
              <div class="card fragment fade-up"><h4>🧭 Consistência</h4><p>O time passa a repetir os mesmos padrões em tarefas similares.</p></div>
              <div class="card fragment fade-up"><h4>📚 Conhecimento</h4><p>Boas práticas ficam documentadas na estrutura, não apenas na memória das pessoas.</p></div>
              <div class="card fragment fade-up"><h4>📈 Escalabilidade</h4><p>Novas pessoas entram mais rápido porque os caminhos esperados estão explícitos.</p></div>
              <div class="card fragment fade-up"><h4>🤝 Colaboração</h4><p>Produto, engenharia e QA passam a discutir evidência, não apenas opinião.</p></div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">⚖️ Trade-offs</span>
            <h2>Há custo de adoção — e ele vale mais em certos contextos</h2>
            <div class="compare">
              <div class="card fragment fade-right">
                <h4>Custos e riscos reais</h4>
                <ul>
                  <li>Investimento inicial em setup, curadoria e treinamento.</li>
                  <li>Necessidade de manter contratos, regras e agentes atualizados.</li>
                  <li>Risco de rigidez excessiva se tudo virar bloqueio.</li>
                  <li>Equilíbrio necessário entre enforcement e flexibilidade para casos novos.</li>
                </ul>
              </div>
              <div class="card fragment fade-left">
                <h4>Quando tende a valer a pena</h4>
                <ul>
                  <li><strong>Team size:</strong> mais de 3 pessoas colaborando no mesmo fluxo.</li>
                  <li><strong>Duração:</strong> projetos com horizonte acima de 6 meses.</li>
                  <li><strong>Qualidade:</strong> produtos onde erro custa caro.</li>
                  <li><strong>Repetição:</strong> domínios com padrões que podem ser formalizados.</li>
                </ul>
              </div>
            </div>
          </section>`,
          `<section>
            <span class="eyebrow">🚀 Como começar</span>
            <h2>Como um time pode começar a adotar essa arquitetura</h2>
            <div class="timeline">
              <div class="timeline-step fragment fade-up">
                <div class="step-number">1</div>
                <h4>Defina padrões de arquitetura</h4>
                <p>Liste o que precisa ser verdade para views, serviços, testes e fluxos críticos.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">2</div>
                <h4>Crie contratos dos componentes centrais</h4>
                <p>Comece por poucos contratos de alto valor para não criar rigidez prematura.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">3</div>
                <h4>Monte o harness de validação</h4>
                <p>Transforme regras importantes em checks automatizados e quality gates.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">4</div>
                <h4>Crie agentes para tarefas recorrentes</h4>
                <p>Formalize comportamento esperado para implementação, review e correções.</p>
              </div>
              <div class="timeline-step fragment fade-up">
                <div class="step-number">5</div>
                <h4>Itere com feedback do time</h4>
                <p>Refine contratos, prompts, skills e gates com base em bugs e rework reais.</p>
              </div>
            </div>
          </section>`,
          `<section>
            <div class="qa">
              <div>
                <span class="eyebrow">❓ Resumo &amp; Q&amp;A</span>
                <div class="hero-question">Spec-driven, em camadas, automatizado e enforceable</div>
                <p class="subtitle" style="max-width: 100%; margin: 18px auto 0; text-align: center;">Próximo passo sugerido: pilotar a abordagem com um time ou feature, medir resultado e evoluir a arquitetura com base em evidência. Perguntas são bem-vindas.</p>
                <div class="chip-row" style="justify-content: center; margin-top: 24px;">
                  <span class="chip">📐 Spec-driven</span>
                  <span class="chip">🏗️ Layered</span>
                  <span class="chip">🤖 Automated</span>
                  <span class="chip">✅ Enforceable</span>
                </div>
                <p style="margin-top: 36px; font-size: 0.7em; color: var(--muted); text-align: center;">Apresentação por <strong style="color: var(--text-strong);">Renato S. Machado Filho</strong></p>
              </div>
            </div>
          </section>`
        ]
};
