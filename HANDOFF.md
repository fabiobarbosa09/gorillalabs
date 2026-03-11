# Gorilla Labs Handoff

## Projeto

- Workspace: `F:\backup\Downloads\novo projeto`
- Stack: `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS v4`
- Idioma: `pt-BR`
- Objetivo: landing page premium da Gorilla Labs com foco em SEO, visual futurista dark roxo, glassmorphism e captacao de leads

## Estado Atual

- Landing page principal implementada
- SEO tecnico implementado
  - metadata
  - Open Graph
  - JSON-LD
  - `robots.txt`
  - `sitemap.xml`
  - `manifest`
- Formulario de contato implementado
  - endpoint `POST /api/leads`
  - validacao com `zod`
  - provider `mock` para desenvolvimento
  - provider `google-sheets` preparado para producao
- Fonte principal dos titulos trocada para `Helvena` local
- Fotos reais da equipe integradas
- Cards de servicos com imagens de fundo relacionadas a cada oferta
- Secao de clientes com logos reais integradas em card ao lado esquerdo do nome

## Decisoes Visuais Aprovadas

- Visual dark com roxo escuro
- Glassmorphism leve
- Glow roxo sutil nos cards
- Retratos da equipe circulares
- Nome abaixo da foto
- Profissao menor abaixo do nome
- Hover com glow/scale suave nos retratos
- Fundos dos servicos com imagem + overlay escuro para manter leitura

## Equipe no Site

- `Eduardo Neutzling` - `Socio proprietario`
- `Fabio Barbosa` - `Socio proprietario`
- `Nathan Veiga` - `Editor de videos`
- `Anny Beatriz` - `Social media`
- `Matheus Meira` - `Design grafico`

## Assets

- Fonte local: pasta `font helvena`
- Fotos originais: pasta `fotos integrantes`
- Fotos usadas no site: `public/team`
  - `eduardo-neutzling.jpg`
  - `fabio-barbosa.jpg`
  - `nathan-veiga.jpg`
  - `anny-beatriz.jpg`
  - `matheus-meira.jpg`
- Fundos dos servicos: `public/service-media`
  - `automation.jpg`
  - `rebrand.jpg`
  - `social.jpg`
  - `design.jpg`
  - `video.jpg`
  - `viral.png`
  - `traffic.jpg`
  - `research.jpg`
- Pasta pronta para logos dos clientes: `public/client-logos`
  - colocar ali os arquivos finais das logos
  - depois apontar os caminhos em `lib/media-assets.ts`

## Arquivos Principais

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/member-card.tsx`
- `components/contact-form.tsx`
- `components/spotlight-card.tsx`
- `lib/site-config.ts`
- `lib/media-assets.ts`
- `app/api/leads/route.ts`

## Como Rodar

```powershell
npm.cmd run dev
```

- Preview local: `http://127.0.0.1:3000`
- Se precisar reinstalar dependencias:

```powershell
npm.cmd install
```

## Build e Checks

- Typecheck:

```powershell
npm.cmd run check
```

- Build de producao:

```powershell
npx.cmd next build --webpack
```

Observacao:
- no ambiente Windows desta maquina, `npm` via PowerShell pode cair em `npm.ps1`; usar `npm.cmd`
- o `next build` e o `next dev` dentro do sandbox podem falhar por `spawn EPERM`
- quando isso acontecer, rodar fora do sandbox ou repetir com permissao elevada no Codex

## Variaveis de Ambiente

Copiar `.env.example` para `.env.local` e configurar:

- `LEAD_PROVIDER`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`

## Pendencias Naturais

- Substituir placeholders das logos dos clientes pelas logos reais em `public/client-logos`
- Adicionar imagem ou arte aprovada no hero
- Configurar numero real do WhatsApp
- Conectar Google Sheets real
- Revisar copy final e possiveis ajustes finos de responsividade

## Continuidade em Outro Chat

Se abrir outro chat, usar algo como:

`continue o projeto Gorilla Labs em F:\backup\Downloads\novo projeto e leia o HANDOFF.md`

## Importante

- O codigo fica salvo no disco
- O preview `localhost` nao fica ligado se o PC desligar
- Para voltar a ver o site, subir de novo com `npm.cmd run dev`