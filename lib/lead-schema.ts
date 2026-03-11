import { z } from "zod";

import { budgetOptions, interestOptions } from "@/lib/site-config";

const requiredText = (field: string, min: number, max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z
      .string({ error: `Informe ${field}.` })
      .min(min, `Informe ${field}.`)
      .max(max, `${field} excede o limite permitido.`),
  );

const optionalText = (max: number) =>
  z.preprocess(
    (value) => {
      if (typeof value !== "string") {
        return value;
      }

      const trimmed = value.trim();
      return trimmed.length > 0 ? trimmed : undefined;
    },
    z.string().max(max, "Campo excede o limite permitido.").optional(),
  );

export const leadSchema = z.object({
  name: requiredText("seu nome", 2, 80),
  company: optionalText(100),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z.email("Informe um e-mail válido."),
  ),
  whatsapp: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z
      .string({ error: "Informe seu WhatsApp." })
      .regex(/^[\d\s()+-]{10,20}$/, "Informe um WhatsApp válido."),
  ),
  interest: z.enum(interestOptions, {
    error: "Selecione o interesse principal.",
  }),
  budget: z.enum(budgetOptions, {
    error: "Selecione uma faixa de investimento.",
  }),
  message: requiredText("sua mensagem", 10, 1200),
  utmSource: optionalText(120),
  utmCampaign: optionalText(120),
  website: optionalText(120),
});

export type LeadInput = z.infer<typeof leadSchema>;
