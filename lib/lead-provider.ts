import { google } from "googleapis";

import type { LeadInput } from "@/lib/lead-schema";

const SHEET_RANGE = "Leads!A:K";

type LeadProviderMode = "mock" | "google-sheets";

function getLeadProviderMode(): LeadProviderMode {
  return process.env.LEAD_PROVIDER === "google-sheets" ? "google-sheets" : "mock";
}

async function saveToGoogleSheets(payload: LeadInput) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("Google Sheets environment variables are not configured.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: SHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          payload.name,
          payload.company || "",
          payload.email,
          payload.whatsapp,
          payload.interest,
          payload.budget,
          payload.message,
          payload.utmSource || "",
          payload.utmCampaign || "",
          "site",
        ],
      ],
    },
  });
}

export async function persistLead(payload: LeadInput) {
  const mode = getLeadProviderMode();

  if (mode === "google-sheets") {
    await saveToGoogleSheets(payload);
    return { ok: true, provider: mode } as const;
  }

  console.info("[mock-lead]", payload);
  return { ok: true, provider: mode } as const;
}
