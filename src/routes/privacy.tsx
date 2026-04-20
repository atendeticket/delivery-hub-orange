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
          "Política de privacidade do ChefBora: saiba como coletamos, usamos e protegemos seus dados pessoais.",
      },
      { property: "og:title", content: "Política de Privacidade — ChefBora" },
      {
        property: "og:description",
        content: "Como o ChefBora coleta, usa e protege seus dados.",
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
        <h1 className="font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-8 text-base leading-relaxed text-foreground">
          <Section title="1. Informações que coletamos">
            <p>
              O ChefBora coleta informações que você fornece diretamente ao criar uma
              conta, configurar seu cardápio ou processar pedidos. Isso inclui nome,
              e-mail, telefone, endereço comercial, dados de pagamento e informações
              dos seus clientes finais (nome, endereço de entrega e contato).
            </p>
          </Section>

          <Section title="2. Como usamos suas informações">
            <p>
              Utilizamos seus dados para fornecer e melhorar o serviço, processar
              pagamentos, entregar pedidos, enviar notificações operacionais e
              comunicações sobre o produto, além de cumprir obrigações legais.
            </p>
          </Section>

          <Section title="3. Compartilhamento de dados">
            <p>
              Não vendemos seus dados. Compartilhamos informações apenas com
              prestadores de serviço essenciais (processadores de pagamento, provedores
              de hospedagem e logística) e quando exigido por lei.
            </p>
          </Section>

          <Section title="4. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados,
              incluindo criptografia em trânsito e em repouso, controle de acesso e
              backups automáticos.
            </p>
          </Section>

          <Section title="5. Seus direitos (LGPD)">
            <p>
              Você pode solicitar acesso, correção, portabilidade ou exclusão dos seus
              dados pessoais a qualquer momento, conforme a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018). Para excluir sua conta, acesse a página de{" "}
              <a href="/delete-account" className="text-primary underline">
                exclusão de conta
              </a>
              .
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Usamos cookies essenciais para autenticação e funcionamento da plataforma,
              além de cookies analíticos para entender como o serviço é utilizado.
            </p>
          </Section>

          <Section title="7. Contato">
            <p>
              Em caso de dúvidas sobre esta política, entre em contato pelo e-mail{" "}
              <a href="mailto:privacidade@chefbora.com.br" className="text-primary underline">
                privacidade@chefbora.com.br
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-[Plus_Jakarta_Sans,sans-serif] text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}
