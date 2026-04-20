import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Excluir minha conta — ChefBora" },
      {
        name: "description",
        content:
          "Solicite a exclusão definitiva da sua conta e dos seus dados no ChefBora.",
      },
      { property: "og:title", content: "Excluir minha conta — ChefBora" },
      {
        property: "og:description",
        content: "Solicite a exclusão definitiva da sua conta no ChefBora.",
      },
    ],
  }),
  component: DeleteAccountPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  accountId: z.string().trim().max(100).optional().or(z.literal("")),
  reason: z.string().trim().max(1000).optional().or(z.literal("")),
  confirm: z.literal(true, {
    errorMap: () => ({ message: "Você precisa confirmar a exclusão" }),
  }),
});

function DeleteAccountPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [confirm, setConfirm] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      accountId: String(form.get("accountId") ?? ""),
      reason: String(form.get("reason") ?? ""),
      confirm,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background font-[Inter,system-ui,sans-serif] text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="font-[Plus_Jakarta_Sans,sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Excluir minha conta
        </h1>
        <p className="mt-3 text-muted-foreground">
          Use este formulário para solicitar a exclusão definitiva da sua conta e dos
          seus dados pessoais no ChefBora.
        </p>

        <Card className="mt-8 border-destructive/30 bg-destructive/5 p-5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">
                Esta ação é irreversível.
              </p>
              <p className="mt-1 text-muted-foreground">
                Após processarmos sua solicitação, todos os seus dados, cardápios,
                histórico de pedidos e configurações serão removidos em até 30 dias.
                Não será possível recuperar a conta.
              </p>
            </div>
          </div>
        </Card>

        {submitted ? (
          <Card className="mt-8 border-primary/30 bg-primary/5 p-6">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="font-[Plus_Jakarta_Sans,sans-serif] text-xl font-bold">
                  Solicitação recebida
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recebemos sua solicitação de exclusão. Nossa equipe vai validar os
                  dados e enviar um e-mail de confirmação em até 5 dias úteis para o
                  endereço informado.
                </p>
              </div>
            </div>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <Field label="Nome completo" error={errors.name}>
              <Input name="name" maxLength={100} required />
            </Field>
            <Field label="E-mail da conta" error={errors.email}>
              <Input name="email" type="email" maxLength={255} required />
            </Field>
            <Field
              label="ID da conta ou nome do restaurante (opcional)"
              error={errors.accountId}
            >
              <Input name="accountId" maxLength={100} />
            </Field>
            <Field label="Motivo da exclusão (opcional)" error={errors.reason}>
              <Textarea name="reason" maxLength={1000} rows={4} />
            </Field>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Checkbox
                id="confirm"
                checked={confirm}
                onCheckedChange={(v) => setConfirm(v === true)}
              />
              <div>
                <Label htmlFor="confirm" className="cursor-pointer text-sm font-medium">
                  Entendo que esta ação é definitiva e que todos os meus dados serão
                  removidos permanentemente.
                </Label>
                {errors.confirm && (
                  <p className="mt-1 text-xs text-destructive">{errors.confirm}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              variant="destructive"
              className="h-12 w-full text-base font-semibold sm:w-auto sm:px-8"
            >
              Solicitar exclusão da conta
            </Button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
