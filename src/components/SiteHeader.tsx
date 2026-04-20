import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo className="h-9" />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#modulos" className="transition-colors hover:text-foreground">Módulos</a>
          <a href="/#funcionalidades" className="transition-colors hover:text-foreground">Funcionalidades</a>
          <a href="/#como-funciona" className="transition-colors hover:text-foreground">Como funciona</a>
          <a href="/#planos" className="transition-colors hover:text-foreground">Planos</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button
            size="sm"
            className="bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
          >
            Teste grátis
          </Button>
        </div>
      </div>
    </header>
  );
}
