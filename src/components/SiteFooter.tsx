import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Instagram, Facebook, Linkedin, MessageCircle, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="suporte" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-9" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A plataforma de delivery completa para restaurantes que querem
              crescer com marca própria, sem comissões e com tecnologia de
              verdade.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Produto"
            links={[
              { label: "Funcionalidades", href: "/#funcionalidades" },
              { label: "Como funciona", href: "/#como-funciona" },
              { label: "Planos", href: "/#planos" },
              { label: "Comparar com iFood", href: "/#comparativo" },
            ]}
          />
          <FooterCol
            title="Empresa"
            links={[
              { label: "Sobre", href: "#" },
              { label: "Clientes", href: "#" },
              { label: "Contato", href: "#" },
            ]}
          />
          <FooterColMixed
            title="Legal"
            items={[
              { label: "Termos de uso", to: "/terms" },
              { label: "Privacidade", to: "/privacy" },
              { label: "Excluir conta", to: "/delete-account" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ChefBora. Todos os direitos reservados.</p>
          <a
            href="mailto:contato@chefbora.com"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            contato@chefbora.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterColMixed({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {items.map((l) => (
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
