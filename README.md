# Charlie Li — Personal Portfolio

Personal portfolio site for [chuangqili.com](https://chuangqili.com). Built with Next.js as a full-stack monolith — static marketing pages, server actions, and optional email delivery via Resend.

## Live

🌐 [https://chuangqili.com](https://chuangqili.com)

## Tech Stack

- **Framework** — Next.js 16 (App Router), React 19, TypeScript
- **Styling** — Tailwind CSS 4, responsive design tokens, light/dark theme
- **Animation** — Motion
- **Maps** — Leaflet + CARTO tiles (About section)
- **Email** — Resend (contact form)
- **Deploy** — AWS Amplify (planned) · Domain on Route 53

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | For contact form | API key from [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Optional | Inbox for form submissions |
| `RESEND_FROM` | Optional | Sender address (use `onboarding@resend.dev` for testing) |

Without `RESEND_API_KEY`, the contact form validates input but does not send email.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Project Structure

```
src/
├── app/              # Routes & layout
├── actions/          # Server actions (contact form)
├── components/
│   ├── layout/       # Header, footer, theme
│   ├── sections/     # Page sections (hero, about, …)
│   ├── shared/       # Reusable UI pieces
│   └── ui/           # Base components
├── config/           # Site metadata & navigation
├── content/          # Editable copy (profile, experience)
├── lib/              # Utilities & email
└── styles/           # Global CSS & design tokens
```

Content is mostly driven by files in `src/content/` and `src/config/site.ts` — update those to change copy without touching layout code.

## License

Private — all rights reserved.
