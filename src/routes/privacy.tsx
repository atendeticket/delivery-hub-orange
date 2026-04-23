import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — ChefBora" },
      {
        name: "description",
        content:
          "Política de Privacidade do ChefBora: como coletamos, usamos, armazenamos e protegemos dados pessoais nos termos da LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — ChefBora" },
      {
        property: "og:description",
        content:
          "Saiba como o ChefBora trata dados pessoais em seus aplicativos, sites e serviços.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Legal
          </p>
          <h1 className="mt-2 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização: 23/04/2026
          </p>
        </header>

        <article className="space-y-8 text-[15px] leading-relaxed">
          <p className="text-muted-foreground">
            Esta Política de Privacidade descreve como o ChefBora coleta,
            utiliza, armazena, compartilha e protege dados pessoais no contexto
            de todos os aplicativos, websites e serviços da plataforma,
            incluindo estabelecimentos parceiros que utilizam o ChefBora.
          </p>

          <Section title="1. Abrangência">
            <p>Esta política se aplica a todos os produtos e serviços operados sob a marca ChefBora.</p>
            <p>Eventuais exceções ou regras específicas serão informadas diretamente no aplicativo, site ou serviço correspondente.</p>
          </Section>

          <Section title="2. Controlador e Contato">
            <p>O ChefBora atua como controlador dos dados pessoais para fins desta política.</p>
            <p>
              Contato para privacidade e proteção de dados:
              <br />E-mail: [preencher e-mail]
              <br />Encarregado (DPO): [preencher nome, se aplicável]
            </p>
          </Section>

          <Section title="3. Dados Coletados">
            <p>Podemos coletar as seguintes categorias de dados:</p>
            <h3 className="mt-4 font-semibold text-foreground">3.1 Dados fornecidos pelo usuário</h3>
            <List items={["Nome", "Número de telefone (incluindo WhatsApp)", "E-mail (quando aplicável)"]} />
            <h3 className="mt-4 font-semibold text-foreground">3.2 Dados de autenticação</h3>
            <List items={["Identificação via número de WhatsApp", "Tokens de autenticação"]} />
            <h3 className="mt-4 font-semibold text-foreground">3.3 Dados de uso</h3>
            <List items={["Interações no app", "Histórico de pedidos", "Preferências"]} />
            <h3 className="mt-4 font-semibold text-foreground">3.4 Dados de localização</h3>
            <List items={["Localização aproximada ou informada para entrega"]} />
            <h3 className="mt-4 font-semibold text-foreground">3.5 Dados de pagamento</h3>
            <List items={["Processados por terceiros (ex: gateways de pagamento)", "O ChefBora não armazena dados completos de cartão"]} />
          </Section>

          <Section title="4. Finalidade do Tratamento">
            <p>Os dados são utilizados para:</p>
            <List items={["Criar e gerenciar contas", "Permitir login via WhatsApp", "Processar pedidos e entregas", "Facilitar comunicação entre usuário e estabelecimento", "Melhorar serviços e experiência", "Prevenir fraudes e garantir segurança", "Cumprir obrigações legais"]} />
          </Section>

          <Section title="5. Base Legal (LGPD)">
            <p>Tratamos dados pessoais com base nas seguintes hipóteses legais:</p>
            <List items={["Execução de contrato", "Consentimento do usuário", "Cumprimento de obrigação legal", "Legítimo interesse (melhoria de serviços, segurança)"]} />
          </Section>

          <Section title="6. Compartilhamento de Dados">
            <p>Os dados podem ser compartilhados com:</p>
            <List items={["Estabelecimentos parceiros (para execução de pedidos)", "Provedores de tecnologia e hospedagem", "Serviços de pagamento", "Autoridades públicas, quando exigido por lei"]} />
          </Section>

          <Section title="7. Retenção de Dados">
            <p>Os dados serão armazenados pelo tempo necessário para:</p>
            <List items={["Cumprimento das finalidades descritas", "Obrigações legais e regulatórias", "Resolução de disputas"]} />
            <p>Após esse período, os dados poderão ser anonimizados ou excluídos.</p>
          </Section>

          <Section title="8. Direitos do Usuário">
            <p>Nos termos da LGPD, o usuário pode solicitar:</p>
            <List items={["Confirmação de tratamento", "Acesso aos dados", "Correção de dados incompletos", "Exclusão de dados", "Portabilidade", "Revogação do consentimento"]} />
            <p>Solicitações podem ser feitas pelo contato informado nesta política.</p>
          </Section>

          <Section title="9. Segurança">
            <p>Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda, alteração ou destruição.</p>
          </Section>

          <Section title="10. Cookies e Tecnologias">
            <p>Podemos utilizar cookies e tecnologias similares para:</p>
            <List items={["Autenticação", "Segurança", "Análise de uso"]} />
            <p>O uso pode variar conforme o aplicativo.</p>
          </Section>

          <Section title="11. Transferência Internacional">
            <p>Dados podem ser armazenados em servidores fora do Brasil, respeitando requisitos legais aplicáveis.</p>
          </Section>

          <Section title="12. Alterações desta Política">
            <p>Esta política pode ser atualizada a qualquer momento. O uso contínuo da plataforma implica concordância com a versão vigente.</p>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}
