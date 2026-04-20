import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — ChefBora" },
      {
        name: "description",
        content:
          "Termos de uso do ChefBora: regras e condições para utilização da plataforma de delivery.",
      },
      { property: "og:title", content: "Termos de Uso — ChefBora" },
      {
        property: "og:description",
        content: "Regras e condições para utilização do ChefBora.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Termos de Uso
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed">
          <Section title="1. Aceitação dos termos">
            <p>
              Ao criar uma conta no ChefBora, você concorda com estes Termos de Uso e
              com nossa Política de Privacidade. Se não concordar, não utilize o serviço.
            </p>
          </Section>

          <Section title="2. Descrição do serviço">
            <p>
              O ChefBora é uma plataforma SaaS que oferece cardápio digital, painel de
              gestão e aplicativo para entregadores, voltada a restaurantes e lojas que
              operam delivery próprio.
            </p>
          </Section>

          <Section title="3. Conta do usuário">
            <p>
              Você é responsável por manter a confidencialidade das credenciais da sua
              conta e por todas as atividades realizadas nela. Notifique-nos imediatamente
              em caso de uso não autorizado.
            </p>
          </Section>

          <Section title="4. Uso aceitável">
            <p>
              É proibido utilizar o ChefBora para atividades ilegais, comercializar
              produtos proibidos, enviar conteúdo ofensivo ou tentar comprometer a
              segurança da plataforma.
            </p>
          </Section>

          <Section title="5. Pagamentos e assinaturas">
            <p>
              As assinaturas são cobradas mensalmente conforme o plano contratado. O
              cancelamento pode ser feito a qualquer momento e o acesso permanece ativo
              até o fim do período já pago. Não há reembolso proporcional.
            </p>
          </Section>

          <Section title="6. Propriedade intelectual">
            <p>
              Todo o conteúdo, marca, software e identidade visual do ChefBora são de
              nossa propriedade. Você mantém todos os direitos sobre os dados e conteúdos
              que insere na plataforma.
            </p>
          </Section>

          <Section title="7. Limitação de responsabilidade">
            <p>
              O ChefBora não se responsabiliza por danos indiretos, lucros cessantes ou
              prejuízos decorrentes de indisponibilidade temporária do serviço, falhas
              de terceiros ou uso indevido pelo cliente.
            </p>
          </Section>

          <Section title="8. Encerramento">
            <p>
              Você pode encerrar sua conta a qualquer momento pela página de{" "}
              <a href="/delete-account" className="text-primary underline">
                exclusão de conta
              </a>
              . Podemos suspender contas que violem estes termos.
            </p>
          </Section>

          <Section title="9. Foro">
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da
              comarca da sede do ChefBora para dirimir quaisquer controvérsias.
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
