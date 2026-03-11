import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function createWhatsappLink(message: string) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!rawNumber) {
    return "#contato";
  }

  const digits = rawNumber.replace(/\D/g, "");

  if (!digits) {
    return "#contato";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
