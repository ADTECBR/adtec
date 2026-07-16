import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso | AD TEC',
  description: 'Leia os Termos de Uso do site ad.tec.br e do fórum da comunidade AD TEC em batepapo.ad.tec.br.',
};

export default function TermosPage() {
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
          Termos de Uso
        </h1>

        <p className="text-sm mb-12" style={{ color: 'var(--c-text-3)' }}>
          Última atualização: julho de 2026
        </p>

        <div className="legal-body flex flex-col gap-10" style={{ color: 'var(--c-text-2)' }}>

          <section>
            <h2>1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site <strong style={{ color: 'var(--c-text-1)' }}>https://ad.tec.br</strong> ou o fórum da comunidade <strong style={{ color: 'var(--c-text-1)' }}>https://batepapo.ad.tec.br</strong>, você declara que leu, compreendeu e concorda com estes Termos de Uso e com nossa <Link href="/privacidade" style={{ color: '#4285f4' }}>Política de Privacidade</Link>.
            </p>
            <p>
              Se você não concordar com qualquer disposição destes termos, por favor, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2>2. Sobre a AD TEC</h2>
            <p>
              A <strong style={{ color: 'var(--c-text-1)' }}>AD TEC SOLUÇÕES EM TECNOLOGIA E PUBLICIDADE LTDA.</strong>, CNPJ 52.505.305/0001-59, é uma agência de tecnologia e publicidade digital que oferece serviços de consultoria nas áreas de tráfego pago, SEO, desenvolvimento web, branding, AdOps, consultoria AdTech e automação de atendimento via WhatsApp.
            </p>
            <p>
              Os serviços da AD TEC são prestados exclusivamente na modalidade de <strong style={{ color: 'var(--c-text-1)' }}>consultoria</strong>, conforme proposta comercial específica acordada entre as partes. O acesso ao site e ao fórum não implica, por si só, qualquer vínculo contratual de prestação de serviços.
            </p>
          </section>

          <section>
            <h2>3. Uso do site</h2>
            <h3>3.1 Uso permitido</h3>
            <p>Você pode utilizar o site para:</p>
            <ul>
              <li>Conhecer os serviços e o portfólio da AD TEC.</li>
              <li>Entrar em contato por meio do formulário disponível.</li>
              <li>Ler os artigos do blog para fins informativos.</li>
              <li>Agendar uma conversa com nossa equipe.</li>
            </ul>
            <h3>3.2 Uso proibido</h3>
            <p>É expressamente vedado:</p>
            <ul>
              <li>Reproduzir, distribuir ou comercializar qualquer conteúdo do site sem autorização prévia e por escrito.</li>
              <li>Utilizar mecanismos automatizados (bots, scrapers) para extração de conteúdo ou dados.</li>
              <li>Tentar acessar sistemas, servidores ou bancos de dados de forma não autorizada.</li>
              <li>Enviar spam ou mensagens não solicitadas por meio do formulário de contato.</li>
              <li>Praticar qualquer ato que viole a legislação brasileira aplicável.</li>
            </ul>
          </section>

          <section>
            <h2>4. Fórum da comunidade (batepapo.ad.tec.br)</h2>
            <h3>4.1 Cadastro</h3>
            <p>
              Para participar do fórum, é necessário criar uma conta com e-mail válido. Você é responsável pela confidencialidade de sua senha e por todas as atividades realizadas com sua conta.
            </p>
            <h3>4.2 Regras de conduta</h3>
            <p>Ao participar do fórum, você concorda em:</p>
            <ul>
              <li>Tratar todos os participantes com respeito e civilidade.</li>
              <li>Publicar apenas conteúdo relevante aos temas do fórum (AdTech, marketing digital, publicidade, tecnologia).</li>
              <li>Não publicar conteúdo ofensivo, discriminatório, difamatório, pornográfico ou ilegal.</li>
              <li>Não fazer spam, autopromoção excessiva ou publicidade não autorizada.</li>
              <li>Não compartilhar informações confidenciais de terceiros.</li>
              <li>Respeitar os direitos autorais ao citar fontes externas.</li>
            </ul>
            <h3>4.3 Moderação</h3>
            <p>
              A AD TEC reserva-se o direito de remover conteúdos que violem estas regras e de suspender ou encerrar contas de usuários infratores, sem aviso prévio e sem direito a indenização.
            </p>
            <h3>4.4 Conteúdo publicado</h3>
            <p>
              Ao publicar no fórum, você concede à AD TEC uma licença não exclusiva, gratuita e mundial para exibir, armazenar e distribuir o conteúdo dentro da plataforma. Você mantém a titularidade sobre o que publica.
            </p>
          </section>

          <section>
            <h2>5. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo do site ad.tec.br — incluindo textos, logotipos, imagens, identidade visual, código-fonte e artigos do blog — é de propriedade exclusiva da AD TEC ou de seus licenciadores, e é protegido pela legislação brasileira de direitos autorais (Lei n.º 9.610/1998) e de marcas (Lei n.º 9.279/1996).
            </p>
            <p>
              É permitida a citação de trechos de artigos do blog para fins educativos ou jornalísticos, desde que acompanhada de atribuição clara à AD TEC e link para a fonte original.
            </p>
          </section>

          <section>
            <h2>6. Isenção e limitação de responsabilidade</h2>
            <p>
              O site e o fórum são fornecidos <strong style={{ color: 'var(--c-text-1)' }}>"no estado em que se encontram"</strong>, sem garantias de qualquer natureza. A AD TEC não garante a disponibilidade ininterrupta dos serviços nem a ausência de erros.
            </p>
            <p>A AD TEC não se responsabiliza por:</p>
            <ul>
              <li>Danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site ou do fórum.</li>
              <li>Conteúdo publicado por usuários no fórum.</li>
              <li>Informações disponíveis em sites de terceiros linkados a partir de nosso conteúdo.</li>
              <li>Interrupções decorrentes de manutenção, falhas técnicas ou eventos de força maior.</li>
            </ul>
          </section>

          <section>
            <h2>7. Links externos</h2>
            <p>
              Nosso site e blog podem conter links para sites de terceiros. Esses links são fornecidos apenas para conveniência e não implicam endosso ou responsabilidade pela AD TEC sobre o conteúdo, a política de privacidade ou as práticas de tais sites.
            </p>
          </section>

          <section>
            <h2>8. Alterações nos Termos</h2>
            <p>
              Podemos revisar estes Termos de Uso a qualquer momento. A data da última atualização sempre estará indicada no topo desta página. O uso continuado do site ou do fórum após alterações constitui aceitação dos novos termos. Alterações materiais que afetem usuários do fórum serão comunicadas por e-mail ou por aviso na plataforma.
            </p>
          </section>

          <section>
            <h2>9. Lei aplicável e foro</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer litígio decorrente ou relacionado a estes termos será submetido ao foro da comarca do domicílio da AD TEC, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2>10. Contato</h2>
            <p>Dúvidas sobre estes Termos de Uso podem ser enviadas para:</p>
            <ul>
              <li><strong style={{ color: 'var(--c-text-1)' }}>Empresa:</strong> AD TEC Soluções em Tecnologia e Publicidade LTDA.</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>CNPJ:</strong> 52.505.305/0001-59</li>
              <li><strong style={{ color: 'var(--c-text-1)' }}>E-mail:</strong> <a href="mailto:atendimento@ad.tec.br">atendimento@ad.tec.br</a></li>
            </ul>
          </section>

        </div>
      </article>
    </div>
  );
}
