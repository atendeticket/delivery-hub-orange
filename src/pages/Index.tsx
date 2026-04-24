import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  LayoutDashboard,
  MessageCircle,
  Bell,
  Users,
  TrendingUp,
  Shield,
  Heart,
  XCircle,
  Sparkles,
  Star,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import phoneMenu from "@/assets/phone-menu.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Features />
        <Trust />
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
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-32 lg:pt-28">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Seu delivery, suas regras
          </div>
          <h1 className="font-[Plus_Jakarta_Sans,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Seu próprio app de delivery,{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              sem pagar comissão
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Pare de entregar 30% do seu lucro para marketplaces. Com o ChefBora,
            seu restaurante tem app próprio, painel completo e WhatsApp integrado
            — em poucos minutos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 bg-[image:var(--gradient-primary)] px-8 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] hover:opacity-95"
            >
              Criar meu app agora
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 border-border px-8 text-base font-semibold"
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
              Configure em 5 minutos
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-8 -z-10 rounded-[2rem] opacity-50 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <img
              src={dashboardHero}
              alt="Painel de gestão de pedidos do ChefBora"
              width={1280}
              height={960}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden w-52 rotate-[-6deg] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] sm:block">
            <img
              src={phoneMenu}
              alt="App de cardápio do ChefBora no celular"
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

/* ---------- PROBLEMA ---------- */
function Problem() {
  const pains = [
    {
      title: "Comissões de até 30% por pedido",
      desc: "Cada venda no marketplace tira uma fatia gigante do seu lucro.",
    },
    {
      title: "Cliente é deles, não seu",
      desc: "Você não tem acesso ao contato, histórico nem ao relacionamento.",
    },
    {
      title: "Refém da plataforma",
      desc: "Mudanças de regras, ranqueamento e taxas decidem o seu faturamento.",
    },
  ];

  return (
    <section className="border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            O problema
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Você trabalha. Eles lucram.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Restaurantes que dependem só de marketplaces vivem apertados — e
            crescem na medida em que esses apps deixam.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[Plus_Jakarta_Sans,sans-serif] text-lg font-bold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUÇÃO ---------- */
function Solution() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={phoneMenu}
                alt="App próprio do restaurante feito com ChefBora"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              A solução
            </p>
            <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
              ChefBora: o sistema próprio de delivery do seu restaurante
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tudo o que você precisa para vender direto: app próprio para seus
              clientes, painel administrativo completo, automação de pedidos e
              WhatsApp integrado. Sem intermediários e sem comissões.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "App próprio com sua marca, suas cores, sua cara",
                "Pedidos automáticos pelo WhatsApp do seu negócio",
                "Painel para gerenciar tudo em tempo real",
                "Você é dono dos clientes — e dos dados",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button
                size="lg"
                className="h-12 bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
              >
                Quero meu app próprio
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */
function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mais lucro por pedido",
      desc: "Sem comissão por venda. O que entra, fica no seu caixa — não no de terceiros.",
    },
    {
      icon: Shield,
      title: "Controle total do negócio",
      desc: "Você define preços, promoções, raio de entrega e horários. Sem ranqueamento, sem regra escondida.",
    },
    {
      icon: Heart,
      title: "Relacionamento direto",
      desc: "Histórico, preferências e contato dos clientes ficam com você — para fidelizar e vender mais.",
    },
    {
      icon: Bell,
      title: "Automação de pedidos",
      desc: "Pedidos chegam direto no painel e no WhatsApp. Cozinha e atendimento sempre sincronizados.",
    },
  ];

  return (
    <section className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Benefícios
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Por que migrar para o ChefBora
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Mais que uma plataforma — uma forma de você voltar a comandar o seu
            próprio delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold">
                {b.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FUNCIONALIDADES ---------- */
function Features() {
  const items = [
    {
      icon: Smartphone,
      title: "App para clientes",
      desc: "Aplicativo próprio do seu restaurante, com cardápio, carrinho e checkout integrados.",
    },
    {
      icon: LayoutDashboard,
      title: "Painel administrativo",
      desc: "Gestão de pedidos, produtos, estoque e relatórios em tempo real, em um dashboard simples.",
    },
    {
      icon: MessageCircle,
      title: "Integração WhatsApp",
      desc: "Cada pedido chega no WhatsApp do estabelecimento — comunicação direta com o cliente.",
    },
    {
      icon: Bell,
      title: "Gestão de pedidos",
      desc: "Status em tempo real: recebido, em preparo, saiu para entrega e finalizado.",
    },
    {
      icon: Users,
      title: "Multiatendimento",
      desc: "Vários atendentes operando ao mesmo tempo, sem perder pedido nem misturar conversa.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios de vendas",
      desc: "Acompanhe ticket médio, horários de pico e melhores produtos para tomar decisões certas.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </p>
          <h2 className="mt-3 font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tudo o que seu delivery precisa, em uma plataforma só
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[Plus_Jakarta_Sans,sans-serif] text-lg font-bold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROVA / CONFIANÇA ---------- */
function Trust() {
  return (
    <section className="border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <h2 className="mt-6 font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Feito para quem quer crescer{" "}
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            sem depender de apps de terceiros
          </span>
          .
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          O ChefBora é desenhado para restaurantes, lanchonetes e deliveries que
          querem retomar o controle do próprio negócio — com tecnologia simples,
          transparente e sem letras miúdas.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { v: "0%", l: "comissão por venda" },
            { v: "5min", l: "para configurar" },
            { v: "24/7", l: "suporte humano" },
            { v: "100%", l: "seus dados" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-[Plus_Jakarta_Sans,sans-serif] text-3xl font-extrabold text-primary sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.l}
              </div>
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
        <div className="relative">
          <h2 className="font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Comece agora com o ChefBora
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Crie o app do seu delivery em minutos. 14 dias grátis, sem cartão e
            sem fidelidade.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 bg-background px-8 text-base font-bold text-foreground shadow-lg hover:bg-background/95"
            >
              Criar meu app grátis
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 px-8 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              Falar com vendas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
