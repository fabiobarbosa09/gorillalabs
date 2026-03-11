# Gorilla Labs

## Rodando localmente

Use `npm.cmd install` se precisar reinstalar dependências.

```powershell
npm.cmd run dev
```

Preview local: `http://localhost:3000`

## Variáveis

Copie `.env.example` para `.env.local` e ajuste:

- `LEAD_PROVIDER=mock` para desenvolvimento local
- `LEAD_PROVIDER=google-sheets` para envio real ao Google Sheets
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`
