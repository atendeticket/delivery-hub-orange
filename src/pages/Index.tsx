import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  LayoutDashboard,
  MessageCircle,
  Bell,
  Printer,
  Ticket,
  CreditCard,
  Bike,
  Sparkles,
  Star,
  ShieldCheck,
  X,
  Check,
  Quote,
  Cloud,
  Zap,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import phoneMenu from "@/assets/phone-menu.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";

export default function Index() {
  useReveal();
  return (
    <div id="top" className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <ShowcaseDashboard />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Plataforma de delivery para restaurantes
            </div>

            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Seu próprio app de delivery,{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                sem pagar comissão
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Pare de entregar até <strong className="text-foreground">30% do seu lucro</strong> para
              marketplaces. Tenha aplicativo próprio, painel completo, entregadores e WhatsApp
              integrado — tudo em uma plataforma.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="glow-btn h-14 rounded-full bg-[image:var(--gradient-primary)] px-8 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] hover:opacity-95"
              >
                🚀 Começar grátis
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-border bg-background px-7 text-base font-semibold hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-muted-foreground">
              {["Sem comissão", "App próprio", "Suporte rápido", "Setup grátis"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                { v: "+500", l: "restaurantes" },
                { v: "99.9%", l: "uptime" },
                { v: "5 min", l: "para configurar" },
                { v: "24/7", l: "suporte humano" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockups */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div
              className="absolute -inset-10 -z-10 rounded-[3rem] opacity-50 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] animate-float">
              <img
                src={dashboardHero}
                alt="Painel administrativo do ChefBora"
                width={1600}
                height={1100}
                className="h-auto w-full"
              />
            </div>

            {/* phone */}
            <div className="absolute -bottom-10 -left-6 hidden w-44 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-elegant)] animate-float-delayed sm:block lg:w-52">
              <img
                src={phoneMenu}
                alt="App do cliente ChefBora"
                width={800}
                height={1280}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>

            {/* floating cards */}
            <div className="absolute -right-3 top-8 hidden w-56 rounded-2xl border border-border bg-background/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Novo pedido</p>
                  <p className="text-xs text-muted-foreground">#1258 • R$ 45,90</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-2 hidden w-60 rounded-2xl border border-border bg-background/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block animate-float-delayed">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-muted-foreground">Receita hoje</p>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  +18,2%
                </span>
              </div>
              <p className="mt-1 font-display text-xl font-extrabold">R$ 24.532,50</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-3/4 bg-[image:var(--gradient-primary)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LOGO STRIP ---------- */
function LogoStrip() {
  const names = ["Burger House", "Pizza Express", "Sushi Master", "Green Salads", "Açaí da Vila", "Boteco Central"];
  return (
    <section className="border-y border-border bg-secondary/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Restaurantes que escolheram o ChefBora
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {names.map((n) => (
            <span
              key={n}
              className="font-display text-lg font-bold tracking-tight text-muted-foreground"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
function Features() {
  const items = [
    { icon: Smartphone, emoji: "📱", title: "App próprio", desc: "Aplicativo com sua marca, suas cores e seu cardápio." },
    { icon: Bike, emoji: "🛵", title: "Rastreamento em tempo real", desc: "Cliente acompanha o entregador no mapa, ao vivo." },
    { icon: CreditCard, emoji: "💳", title: "Pix automático", desc: "Receba na hora, com confirmação e baixa automática." },
    { icon: MessageCircle, emoji: "🤖", title: "WhatsApp integrado", desc: "Pedidos, status e atendimento direto no WhatsApp." },
    { icon: Printer, emoji: "🖨️", title: "Impressão automática", desc: "Cada pedido vai direto para a impressora da cozinha." },
    { icon: Ticket, emoji: "🎟️", title: "Fidelidade e cupons", desc: "Crie campanhas, descontos e programa de pontos." },
    { icon: LayoutDashboard, emoji: "📦", title: "Gestão de pedidos", desc: "Recebido, preparo, entrega e finalizado em um clique." },
    { icon: Cloud, emoji: "☁️", title: "Painel administrativo", desc: "Relatórios, estoque e financeiro em tempo real." },
  ];

  return (
    <section id="funcionalidades" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tudo o que seu delivery precisa, em uma plataforma
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tecnologia de ponta, simples de usar — feita para restaurantes que querem escalar de
            verdade.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DASHBOARD SHOWCASE ---------- */
function ShowcaseDashboard() {
  return (
    <section className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Painel administrativo
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Visão completa do seu delivery em tempo real
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Acompanhe pedidos, faturamento, entregadores e clientes em um único painel pensado
              para operação intensa de restaurante.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Kanban de pedidos com status em tempo real",
                "Mapa ao vivo de todos os entregadores",
                "Relatórios de vendas, ticket médio e produtos",
                "Multi-loja, multi-usuário, multi-impressora",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={dashboardHero}
                alt="Dashboard ChefBora"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Crie sua conta", desc: "Cadastro em minutos. Sem cartão de crédito." },
    { n: "02", title: "Monte seu cardápio", desc: "Adicione produtos, fotos, categorias e preços." },
    { n: "03", title: "Personalize o app", desc: "Coloque sua marca, cores e área de entrega." },
    { n: "04", title: "Comece a vender", desc: "Receba pedidos pelo app e WhatsApp na hora." },
  ];
  return (
    <section id="como-funciona" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Do zero ao primeiro pedido em minutos
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-sm font-bold text-primary">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARISON ---------- */
function Comparison() {
  const rows = [
    { feat: "Comissão por pedido", ifd: "Até 30%", chef: "0%" },
    { feat: "Cliente é de quem?", ifd: "Do marketplace", chef: "Seu" },
    { feat: "Marca e identidade", ifd: "Genérica", chef: "Personalizada" },
    { feat: "Controle de promoções", ifd: "Limitado", chef: "Total" },
    { feat: "Dados e relatórios", ifd: "Restritos", chef: "Completos" },
    { feat: "Atendimento por WhatsApp", ifd: "Não", chef: "Integrado" },
    { feat: "Dependência de plataforma", ifd: "Alta", chef: "Nenhuma" },
  ];

  return (
    <section id="comparativo" className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Comparativo
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Marketplace tradicional vs ChefBora
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Veja por que centenas de restaurantes estão migrando.
          </p>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-3 border-b border-border bg-secondary/60">
            <div className="p-5 text-sm font-semibold text-muted-foreground">Recurso</div>
            <div className="p-5 text-sm font-semibold text-muted-foreground">Marketplace</div>
            <div className="flex items-center gap-2 bg-[image:var(--gradient-primary)] p-5 text-sm font-bold text-primary-foreground">
              ChefBora
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.feat}
              className={`grid grid-cols-3 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-5 text-sm font-medium">{r.feat}</div>
              <div className="flex items-center gap-2 p-5 text-sm text-muted-foreground">
                <X className="h-4 w-4 text-destructive" />
                {r.ifd}
              </div>
              <div className="flex items-center gap-2 bg-primary/[0.04] p-5 text-sm font-semibold">
                <Check className="h-4 w-4 text-primary" />
                {r.chef}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      name: "Rafael Oliveira",
      role: "Burger House",
      text: "Em 2 meses no ChefBora economizei mais de R$ 18 mil em comissões. Hoje tenho meu app, meus clientes e meu lucro de volta.",
    },
    {
      name: "Mariana Santos",
      role: "Pizza Express",
      text: "O painel é absurdo de bom. Vejo tudo em tempo real, controlo entregadores e meu time aprendeu em um dia.",
    },
    {
      name: "Carlos Eduardo",
      role: "Sushi Master",
      text: "O suporte responde rápido de verdade. Migrei do iFood e nunca mais olhei pra trás.",
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="mx-auto inline-flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Restaurantes que voltaram a lucrar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Avaliação média 4,9/5 entre os clientes ChefBora.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="reveal rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 text-base leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 99",
      desc: "Para quem está começando no delivery próprio.",
      features: ["App próprio", "Cardápio digital", "WhatsApp integrado", "Suporte por chat"],
    },
    {
      name: "Pro",
      price: "R$ 249",
      desc: "Mais vendido. Para restaurantes em crescimento.",
      features: [
        "Tudo do Starter",
        "Rastreamento de entregadores",
        "Relatórios avançados",
        "Cupons e fidelidade",
        "Impressão automática",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      desc: "Para redes e operações multi-loja.",
      features: ["Tudo do Pro", "Multi-loja", "Integrações sob medida", "Gerente dedicado"],
    },
  ];
  return (
    <section id="planos" className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Planos</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Preço justo, sem comissão
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Mensalidade fixa. Sem taxa por pedido. Cancele quando quiser.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "border-primary/40 bg-card shadow-[var(--shadow-elegant)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Mais popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold tracking-tight">
                  {p.price}
                </span>
                {p.price.startsWith("R$") && (
                  <span className="pb-1 text-sm text-muted-foreground">/mês</span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`mt-8 h-12 w-full rounded-full font-semibold ${
                  p.highlight
                    ? "glow-btn bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-95"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Começar agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */
function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-20 text-center shadow-[var(--shadow-elegant)] sm:px-16"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_60%)] opacity-10" />
        <div className="relative reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            14 dias grátis · sem cartão
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Comece hoje. Tenha resultado amanhã.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Crie o app do seu delivery em minutos e comece a vender direto, sem intermediários.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 rounded-full bg-background px-8 text-base font-bold text-foreground shadow-lg hover:bg-background/95"
            >
              <Zap className="h-4 w-4" />
              Criar meu app grátis
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 rounded-full px-8 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              Falar com vendas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
