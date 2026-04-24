import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-10" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Sistema completo de delivery para restaurantes que querem crescer
              sem depender de terceiros.
            </p>
          </div>
          <FooterCol
            title="Produto"
            links={[
              { label: "Cardápio digital", to: "/" },
              { label: "Painel do lojista", to: "/" },
              { label: "App do entregador", to: "/" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Termos de uso", to: "/terms" },
              { label: "Política de privacidade", to: "/privacy" },
              { label: "Excluir conta", to: "/delete-account" },
            ]}
          />
          <FooterCol title="Suporte" links={[{ label: "Contato", to: "/" }]} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ChefBora. Todos os direitos reservados.</p>
          <p>Feito com 🧡 para o delivery brasileiro.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-[Plus_Jakarta_Sans,sans-serif] text-sm font-bold">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
