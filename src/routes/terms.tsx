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
          "Termos de Uso do ChefBora: regras, direitos e deveres para utilização da plataforma e seus serviços.",
      },
      { property: "og:title", content: "Termos de Uso — ChefBora" },
      {
        property: "og:description",
        content:
          "Conheça as condições de uso da plataforma ChefBora e dos estabelecimentos parceiros.",
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
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-2 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Última atualização: 23/04/2026</p>
        </header>

        <article className="space-y-8 text-[15px] leading-relaxed">
          <p className="text-muted-foreground">
            Ao acessar ou utilizar os serviços do ChefBora, o usuário concorda com estes Termos de Uso.
          </p>

          <Section title="1. Descrição do Serviço">
            <p>O ChefBora é uma plataforma tecnológica que intermedia pedidos entre usuários e estabelecimentos.</p>
          </Section>

          <Section title="2. Abrangência">
            <p>Estes termos se aplicam a todos os serviços e estabelecimentos que utilizam a plataforma ChefBora.</p>
            <p>Exceções ou regras específicas poderão ser informadas dentro de cada aplicativo ou serviço.</p>
          </Section>

          <Section title="3. Cadastro e Conta">
            <List items={["O usuário deve fornecer informações verdadeiras", "O login poderá ser realizado via número de WhatsApp", "O usuário é responsável pela segurança da sua conta"]} />
          </Section>

          <Section title="4. Uso Aceitável">
            <p>O usuário concorda em:</p>
            <List items={["Não utilizar o serviço para fins ilegais", "Não violar direitos de terceiros", "Não tentar acessar sistemas indevidamente"]} />
          </Section>

          <Section title="5. Intermediação">
            <List items={["O ChefBora atua como intermediador", "Os estabelecimentos são responsáveis por produtos, preços e qualidade"]} />
          </Section>

          <Section title="6. Pedidos e Pagamentos">
            <List items={["Pedidos são enviados diretamente ao estabelecimento", "Pagamentos podem ser processados por terceiros", "Condições podem variar por estabelecimento"]} />
          </Section>

          <Section title="7. Cancelamentos e Reembolsos">
            <List items={["Definidos por cada estabelecimento", "Informações estarão disponíveis no aplicativo"]} />
          </Section>

          <Section title="8. Limitação de Responsabilidade">
            <p>O ChefBora não se responsabiliza por:</p>
            <List items={["Problemas com pedidos ou qualidade dos produtos", "Atrasos causados por terceiros", "Indisponibilidade temporária do sistema"]} />
          </Section>

          <Section title="9. Suspensão ou Encerramento">
            <p>Podemos suspender ou encerrar contas em caso de violação destes termos.</p>
          </Section>

          <Section title="10. Propriedade Intelectual">
            <p>Todo conteúdo da plataforma pertence ao ChefBora, salvo quando indicado.</p>
          </Section>

          <Section title="11. Legislação Aplicável">
            <p>Estes termos são regidos pelas leis da República Federativa do Brasil.</p>
          </Section>

          <Section title="12. Foro">
            <p>Fica eleito o foro da comarca do domicílio do usuário, conforme legislação aplicável.</p>
          </Section>

          <Section title="13. Alterações">
            <p>Os termos podem ser atualizados a qualquer momento.</p>
          </Section>

          <Section title="14. Aceitação">
            <p>Ao utilizar o serviço, o usuário declara estar de acordo com estes termos.</p>
          </Section>

          <Section title="Observação Geral">
            <p>Estas políticas e termos se aplicam a todos os estabelecimentos e serviços do ChefBora.</p>
            <p>Caso exista qualquer exceção, condição específica ou regra diferenciada, ela será claramente informada dentro do aplicativo, site ou serviço correspondente.</p>
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
