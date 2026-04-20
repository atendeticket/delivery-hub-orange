import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChefHat,
  ShoppingBag,
  LayoutDashboard,
  Bike,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  BarChart3,
  Clock,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import phoneMenu from "@/assets/phone-menu.jpg";
import deliveryRider from "@/assets/delivery-rider.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChefBora — Sistema completo de delivery para restaurantes" },
      {
        name: "description",
        content:
          "ChefBora é o sistema completo de delivery para restaurantes e lojas: cardápio digital, painel do lojista e app do entregador em uma única plataforma.",
      },
      { property: "og:title", content: "ChefBora — Sistema completo de delivery" },
      {
        property: "og:description",
        content:
          "Cardápio digital, gestão de pedidos e app do entregador. Tudo o que seu restaurante precisa para vender mais no delivery.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Modules />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)]">
        <ChefHat className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
      <span className="font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold tracking-tight">
        Chef<span className="text-primary">Bora</span>
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#modulos" className="transition-colors hover:text-foreground">
            Módulos
          </a>
          <a href="#funcionalidades" className="transition-colors hover:text-foreground">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="transition-colors hover:text-foreground">
            Como funciona
          </a>
          <a href="#planos" className="transition-colors hover:text-foreground">
            Planos
          </a>
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Zap className="h-3.5 w-3.5" />
            Sistema completo de delivery
          </div>
          <h1 className="font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Tudo o que seu restaurante precisa para{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              vender mais no delivery
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Cardápio digital, painel de gestão e app do entregador em uma única
            plataforma. Controle pedidos, equipe e entregas sem complicação — e sem
            pagar comissão por venda.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] hover:opacity-95"
            >
              Começar teste grátis
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-border px-7 text-base font-semibold"
            >
              Ver demonstração
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              14 dias grátis
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Sem cartão de crédito
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Suporte em português
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <img
              src={dashboardHero}
              alt="Painel de gestão do ChefBora"
              width={1280}
              height={960}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-48 rotate-[-4deg] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] sm:block">
            <img
              src={phoneMenu}
              alt="Cardápio digital no celular"
              width={800}
              height={1024}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "+30%", label: "em pedidos no primeiro mês" },
    { value: "0%", label: "de comissão por venda" },
    { value: "5min", label: "para configurar o cardápio" },
    { value: "24/7", label: "suporte para o lojista" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-extrabold text-primary lg:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modules() {
  const modules = [
    {
      icon: ShoppingBag,
      title: "Cardápio digital + pedidos online",
      desc: "Sua loja online personalizada com carrinho, checkout e pagamento integrado. O cliente pede direto pelo seu link, sem intermediários.",
      bullets: ["Link próprio da loja", "Pagamento PIX e cartão", "Cupons e promoções"],
      image: phoneMenu,
    },
    {
      icon: LayoutDashboard,
      title: "Painel do lojista",
      desc: "Gerencie pedidos em tempo real, controle estoque, atualize o cardápio e acompanhe o desempenho da sua operação em um só lugar.",
      bullets: ["Pedidos em tempo real", "Relatórios e métricas", "Gestão de produtos"],
      image: dashboardHero,
    },
    {
      icon: Bike,
      title: "App do entregador",
      desc: "Seus entregadores recebem rotas otimizadas, atualizam o status da entrega e acompanham seus ganhos diretamente pelo celular.",
      bullets: ["Rotas otimizadas", "Status em tempo real", "Controle de ganhos"],
      image: deliveryRider,
    },
  ];

  return (
    <section id="modulos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Módulos
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            Três sistemas integrados, um único delivery
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada parte da operação tem sua ferramenta — e todas conversam entre si
            automaticamente.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[Plus_Jakarta_Sans,sans-serif] text-2xl font-bold tracking-tight sm:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Smartphone, title: "100% responsivo", desc: "Funciona perfeitamente em qualquer dispositivo, do celular ao desktop." },
    { icon: BarChart3, title: "Relatórios completos", desc: "Acompanhe vendas, ticket médio e horários de pico em tempo real." },
    { icon: Clock, title: "Pedidos instantâneos", desc: "Notificações automáticas mantêm cozinha e entregadores sincronizados." },
    { icon: Shield, title: "Dados seguros", desc: "Infraestrutura em nuvem com backup automático e criptografia de ponta." },
    { icon: Zap, title: "Setup em minutos", desc: "Configure seu cardápio e comece a vender no mesmo dia." },
    { icon: Star, title: "Avaliações dos clientes", desc: "Receba feedback e construa a reputação da sua loja online." },
  ];

  return (
    <section id="funcionalidades" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            Feito para quem leva o delivery a sério
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="group border-border/80 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-[Plus_Jakarta_Sans,sans-serif] text-lg font-bold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Cadastre seu restaurante", d: "Crie sua conta e configure o cardápio em poucos minutos." },
    { n: "02", t: "Compartilhe seu link", d: "Divulgue o link da sua loja nas redes sociais e WhatsApp." },
    { n: "03", t: "Receba e entregue", d: "Gerencie pedidos pelo painel e despache pelo app do entregador." },
  ];

  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Como funciona
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            Comece a vender em 3 passos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div
                className="font-[Plus_Jakarta_Sans,sans-serif] text-5xl font-extrabold"
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Saímos das taxas absurdas dos apps e dobramos a margem. O painel é simples e a equipe aprende em um dia.",
      name: "Marina Costa",
      role: "Proprietária — Cantina da Marina",
    },
    {
      quote:
        "O app do entregador organizou nossa operação. Hoje sei exatamente onde cada pedido está em tempo real.",
      name: "Rafael Souza",
      role: "Gerente — Burger House",
    },
    {
      quote:
        "Em duas semanas com o ChefBora já tínhamos cardápio online próprio e clientes pedindo direto pelo nosso link.",
      name: "Juliana Lima",
      role: "Sócia — Sabor & Arte",
    },
  ];

  return (
    <section className="border-y border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            Restaurantes que cresceram com o ChefBora
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="border-border/80 bg-card p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "99",
      desc: "Para quem está começando no delivery próprio.",
      features: ["Cardápio digital", "Até 200 pedidos/mês", "Painel do lojista", "Suporte por chat"],
    },
    {
      name: "Pro",
      price: "199",
      desc: "Para restaurantes em crescimento.",
      features: ["Pedidos ilimitados", "App do entregador", "Relatórios avançados", "Cupons e promoções", "Suporte prioritário"],
      highlight: true,
    },
    {
      name: "Business",
      price: "399",
      desc: "Para redes e operações múltiplas.",
      features: ["Tudo do Pro", "Múltiplas unidades", "Integrações via API", "Gerente de conta dedicado"],
    },
  ];

  return (
    <section id="planos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Planos
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            Sem comissão. Sem surpresas.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o plano ideal para sua operação. Cancele quando quiser.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative flex flex-col p-8 ${
                p.highlight
                  ? "border-primary bg-card shadow-[var(--shadow-elegant)] md:scale-105"
                  : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-soft)]">
                  Mais popular
                </div>
              )}
              <h3 className="font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-muted-foreground">R$</span>
                <span className="font-[Plus_Jakarta_Sans,sans-serif] text-5xl font-extrabold tracking-tight">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 h-11 ${
                  p.highlight
                    ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
                    : ""
                }`}
                variant={p.highlight ? "default" : "outline"}
              >
                Começar agora
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[var(--shadow-elegant)] sm:px-16"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_60%)] opacity-10" />
        <div className="relative">
          <h2 className="font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
            Pronto para vender mais no delivery?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">
            Teste o ChefBora grátis por 14 dias. Sem cartão, sem fidelidade.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-background px-8 text-base font-semibold text-foreground hover:bg-background/95"
            >
              Começar teste grátis
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-8 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              Falar com vendas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Sistema completo de delivery para restaurantes que querem crescer sem
              depender de terceiros.
            </p>
          </div>
          <FooterCol
            title="Produto"
            links={["Cardápio digital", "Painel do lojista", "App do entregador", "Integrações"]}
          />
          <FooterCol
            title="Empresa"
            links={["Sobre", "Blog", "Carreiras", "Contato"]}
          />
          <FooterCol
            title="Suporte"
            links={["Central de ajuda", "Status", "Termos", "Privacidade"]}
          />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ChefBora. Todos os direitos reservados.</p>
          <p>Feito com 🧡 para o delivery brasileiro.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-[Plus_Jakarta_Sans,sans-serif] text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
