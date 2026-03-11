"use client";

import { useEffect, useMemo, useState, useTransition } from "react";

import { ArrowRight, CheckCircle, SpinnerGap, WarningCircle } from "@phosphor-icons/react";

import type { LeadInput } from "@/lib/lead-schema";
import { leadSchema } from "@/lib/lead-schema";
import { budgetOptions, interestOptions } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type LeadFormState = Record<keyof LeadInput, string>;
type FieldErrors = Partial<Record<keyof LeadInput, string>>;

const initialState: LeadFormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  interest: "",
  budget: "",
  message: "",
  utmSource: "",
  utmCampaign: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setForm((current) => ({
      ...current,
      utmSource: params.get("utm_source") || "",
      utmCampaign: params.get("utm_campaign") || "",
    }));
  }, []);

  const canSubmit = useMemo(() => !isPending, [isPending]);

  function updateField(name: keyof LeadFormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback({ type: "idle", message: "" });

    const parsed = leadSchema.safeParse(form);

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};

      for (const issue of parsed.error.issues) {
        const field = issue.path[0];

        if (typeof field === "string" && !nextErrors[field as keyof LeadInput]) {
          nextErrors[field as keyof LeadInput] = issue.message;
        }
      }

      setFieldErrors(nextErrors);
      setFeedback({ type: "error", message: "Revise os campos destacados para continuar." });
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsed.data),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setForm((current) => ({
          ...initialState,
          utmSource: current.utmSource,
          utmCampaign: current.utmCampaign,
        }));
        setFieldErrors({});
        setFeedback({
          type: "success",
          message: "Recebemos seu briefing. A Gorilla Labs retorna com os próximos passos.",
        });
      } catch {
        setFeedback({
          type: "error",
          message: "Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.",
        });
      }
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Nome"
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Seu nome"
          error={fieldErrors.name}
          autoComplete="name"
        />
        <Field
          label="Empresa"
          name="company"
          value={form.company}
          onChange={updateField}
          placeholder="Nome da marca"
          error={fieldErrors.company}
          autoComplete="organization"
        />
        <Field
          label="E-mail"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="voce@empresa.com"
          error={fieldErrors.email}
          autoComplete="email"
          inputMode="email"
        />
        <Field
          label="WhatsApp"
          name="whatsapp"
          value={form.whatsapp}
          onChange={updateField}
          placeholder="(00) 00000-0000"
          error={fieldErrors.whatsapp}
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label="Interesse principal"
          name="interest"
          value={form.interest}
          onChange={updateField}
          error={fieldErrors.interest}
          options={interestOptions}
        />
        <SelectField
          label="Faixa de investimento"
          name="budget"
          value={form.budget}
          onChange={updateField}
          error={fieldErrors.budget}
          options={budgetOptions}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/72" htmlFor="message">
          Objetivo
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Descreva onde sua marca está hoje, o que precisa acelerar e quais frentes quer atacar primeiro."
          className={cn("input-shell min-h-40 resize-none", fieldErrors.message && "border-rose-400/60")}
        />
        {fieldErrors.message ? <p className="mt-2 text-sm text-rose-300">{fieldErrors.message}</p> : null}
      </div>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {feedback.type !== "idle" ? (
        <div
          className={cn(
            "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
            feedback.type === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : "border-rose-400/30 bg-rose-400/10 text-rose-100",
          )}
        >
          {feedback.type === "success" ? <CheckCircle size={18} weight="fill" /> : <WarningCircle size={18} weight="fill" />}
          <p>{feedback.message}</p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-white/50">
          Ao enviar, você abre um briefing comercial inicial. Em ambiente local, o modo padrão é mock até que as credenciais do Google Sheets sejam configuradas.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-fuchsia-300/40 bg-[linear-gradient(135deg,rgba(163,79,255,0.95),rgba(88,28,135,0.95))] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(167,92,255,0.35)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? <SpinnerGap size={18} className="animate-spin" /> : <ArrowRight size={18} weight="bold" />}
          Solicitar diagnóstico
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof LeadFormState;
  value: string;
  onChange: (name: keyof LeadFormState, value: string) => void;
  placeholder: string;
  error?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({ label, name, value, onChange, placeholder, error, autoComplete, inputMode }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/72" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={cn("input-shell", error && "border-rose-400/60")}
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof LeadFormState;
  value: string;
  onChange: (name: keyof LeadFormState, value: string) => void;
  error?: string;
  options: readonly string[];
};

function SelectField({ label, name, value, onChange, error, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/72" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={cn("input-shell appearance-none", error && "border-rose-400/60")}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
