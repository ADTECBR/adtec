import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | AD TEC',
  description: 'Saiba como a AD TEC coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
};

export default function PrivacidadePage() {
  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>
      <article className="max-w-3xl mx-auto px-6 pt-36 pb-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
          style={{ color: 'var(--c-text-2)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar ao início
        </Link>

        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1 rounded-full"
          style={{ color: '#4285f4', background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)' }}
        >
          Legal
        </span>

        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--c-text-1)' }}>
          Política de Privacidade
        </h1>

        <p className="text-sm mb-12" style={{ color: 'var(--c-text-3)' }}>
          Última atualização: julho de 2026
        </p>

        <div className="legal-body flex flex-col gap-10" style={{ color: 'var(--c-text-2)' }}>

          <section>
            <h2>1. Quem somos</h2>
            <p>
              A <strong style={{ color: 'var(--c-text-1)' }}>AD TEC SOLUÇÕES EM TECNOLOGIA E PUBLICIDADE LTDA.</strong>, inscrita no CNPJ sob o n.º 52.505.305/0001-59, é a controladora dos dados pessoais tratados por meio do site <strong style={{ color: 'var(--c-text-1)' }}>https://ad.tec.br</strong> e do fórum da comunidade <strong style={{ color: 'var(--c-text-1)' }}>https://batepapo.ad.tec.br</strong>.
            </p>
            <p>
              Esta Política de Privacidade descreve quais dados coletamos, para quê os utilizamos, com quem os compartilhamos e quais são os seus direitos como titular, em conformidade com a <strong style={{ color: 'var(--c-text-1)' }}>Lei Geral de Proteção de Dados (Lei n.º 13.709/2018 — LGPD)</strong>.
            </p>
          </section>

          <section>
            <h2>2. Dados que coletamos</h2>
            <h3>2.1 Formulário de contato</h3>
            <p>Ao preencher o formulário em nosso site, coletamos:</p>
            <ul>
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Assunto de interesse</li>
              <li>Mensagem livre</li>
            </ul>
            <h3>2.2 Fórum da comunidade (batepapo.ad.tec.br)</h3>
            <p>Ao criar uma conta no fórum, coletamos:</p>
            <ul>
              <li>Nome de usuário e nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Senha (armazenada em formato criptografado)</li>
              <li>Endereço IP e dados de acesso (data, hora, dispositivo)</li>
              <li>Conteúdo das publicações, respostas e mensagens privadas</li>
            </ul>
            <h3>2.3 Dados de navegação e cookies</h3>
            <p>
              Por meio do Google Tag Manager (GTM) e do Google Analytics, coletamos automaticamente dados de navegação como páginas visitadas, tempo de permanência, origem do tráfego, tipo de dispositivo e endereço IP anonimizado. Consulte a seção 6 para mais detalhes sobre cookies.
            </p>
          </section>

          <section>
            <h2>3. Finalidade e base legal</h2>
            <table>
              <thead>
                <tr>
                  <th>Dado</th>
                  <th>Finalidade</th>
                  <th>Base legal (LGPD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dados do formulário de contato</td>
                  <td>Responder a solicitações e prospecção comercial</td>
                  <td>Legítimo interesse (Art. 7º, IX)</td>
                </tr>
                <tr>
                  <td>Dados do fórum</td>
                  <td>Criar e manter conta, moderar comunidade</td>
                  <td>Execução de contrato (Art. 7º, V)</td>
                </tr>
                <tr>
                  <td>Dados de navegação</td>
                  <td>Análise de audiência e melhoria do site</td>
                  <td>Legítimo interesse (Art. 7º, IX)</td>
                </tr>
                <tr>
                  <td>E-mail (fórum e contato)</td>
                  <td>Envio de comunicações transacionais</td>
                  <td>Execução de contrato / legítimo interesse</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>4. Compartilhamento com terceiros</h2>
            <p>Seus dados podem ser tratados pelos seguintes suboperadores:</p>
            <ul>
              <li>
                <strong style={{ color: 'var(--c-text-1)' }}>HubSpot, Inc.</strong> — CRM e gestão de contatos. Os dados do formulário de contato são transmitidos e armazenados na plataforma HubSpot. Política de privacidade em <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">legal.hubspot.com/privacy-policy</a>.
              </li>
              <li>
                <strong style={{ color: 'var(--c-text-1)' }}>Google LLC</strong> — Analytics e gerenciamento de tags (GTM). Dados de navegação anonimizados são processados nos servidores do Google. Política em <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
              </li>
              <li>
                <strong style={{ color: 'var(--c-text-1)' }}>Discourse (Civilized Discourse Construction Kit, Inc.)</strong> — Plataforma do fórum da comunidade. Dados de conta e publicações são armazenados na infraestrutura do Discourse hospedada em nossa VPS. Termos em <a href="https://www.discourse.org/privacy" target="_blank" rel="noopener noreferrer">discourse.org/privacy</a>.
              </li>
            </ul>
            <p>
              Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para fins de marketing sem o seu consentimento expresso.
            </p>
          </section>

          <section>
            <h2>5. Transferência internacional de dados</h2>
            <p>
              Os dados tratados pela HubSpot e pelo Google podem ser armazenados e processados fora do Brasil, incluindo nos Estados Unidos. Nesses casos, adotamos salvaguardas adequadas por meio de cláusulas contratuais padrão e certificações equivalentes às exigências da LGPD.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>Utilizamos os seguintes tipos de cookies:</p>
            <ul>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Cookies essenciais:</strong> necessários para o funcionamento básico do site e do fórum (sessão, autenticação).</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Cookies analíticos:</strong> Google Analytics (via GTM) para medir audiência e comportamento de navegação.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Cookies de preferências:</strong> armazenam suas configurações de tema (claro/escuro) e idioma.</li>
            </ul>
            <p>
              Você pode desativar cookies analíticos nas configurações do seu navegador ou por meio das ferramentas de opt-out do Google (<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>). A desativação de cookies essenciais pode afetar o funcionamento do site.
            </p>
          </section>

          <section>
            <h2>7. Retenção dos dados</h2>
            <ul>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Formulário de contato:</strong> os dados são mantidos no HubSpot enquanto houver interesse comercial legítimo ou até que você solicite a exclusão.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Fórum:</strong> os dados da conta são mantidos enquanto ela estiver ativa. Após exclusão da conta, publicações podem ser anonimizadas conforme as configurações da plataforma.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Dados de navegação:</strong> retidos pelo Google Analytics pelo período padrão de 14 meses, após o qual são automaticamente excluídos.</li>
            </ul>
          </section>

          <section>
            <h2>8. Seus direitos como titular</h2>
            <p>Nos termos do Art. 18 da LGPD, você tem o direito de:</p>
            <ul>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Confirmação e acesso:</strong> saber se tratamos seus dados e obter uma cópia.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Anonimização, bloqueio ou eliminação:</strong> dos dados desnecessários ou tratados em desconformidade com a LGPD.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Portabilidade:</strong> receber seus dados em formato estruturado e interoperável.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Eliminação:</strong> dos dados tratados com base em consentimento, mediante solicitação.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Informação:</strong> sobre entidades públicas e privadas com as quais compartilhamos seus dados.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Oposição:</strong> ao tratamento realizado com base em legítimo interesse.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Revogação do consentimento:</strong> quando o tratamento for baseado nessa hipótese.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail <a href="mailto:atendimento@ad.tec.br">atendimento@ad.tec.br</a>. Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2>9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo comunicação via HTTPS, senhas criptografadas no fórum e controles de acesso internos.
            </p>
          </section>

          <section>
            <h2>10. Menores de idade</h2>
            <p>
              Nossos serviços são destinados a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes. Se tomarmos conhecimento de que dados de menores foram coletados sem o consentimento dos responsáveis legais, providenciaremos a exclusão imediata.
            </p>
          </section>

          <section>
            <h2>11. Alterações nesta Política</h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. A data da última atualização estará sempre indicada no topo desta página. Para mudanças materiais, notificaremos os usuários do fórum por e-mail ou por aviso destacado no site.
            </p>
          </section>

          <section>
            <h2>12. Contato</h2>
            <p>
              Dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais devem ser encaminhadas ao controlador:
            </p>
            <ul>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Empresa:</strong> AD TEC Soluções em Tecnologia e Publicidade LTDA.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>CNPJ:</strong> 52.505.305/0001-59</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>E-mail:</strong> <a href="mailto:atendimento@ad.tec.br">atendimento@ad.tec.br</a></li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Site:</strong> https://ad.tec.br</li>
            </ul>
            <p>
              Caso não obtenha resposta satisfatória, você pode acionar a Autoridade Nacional de Proteção de Dados (ANPD) em <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}
