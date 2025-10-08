# Shosh Technologies Inc. Website

Modern marketing website for Shosh Technologies Inc., a Toronto-based software development and SaaS company. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Responsive layout covering Home, About, Services, Products, Blog, and Contact sections
- Privacy-first messaging tailored to professional services firms
- Dark/light theme toggle stored in `localStorage`
- Contact form wired for Formspree (EmailJS compatible)
- Embedded Toronto office map and actionable CTAs
- SEO-ready metadata and Open Graph tags

## Getting Started

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` (create one if it does not exist) and set:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Replace with your Formspree or EmailJS endpoint. The site falls back to a placeholder if not set.

## Production Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Install the [Vercel CLI](https://vercel.com/docs/cli) and authenticate.
2. Run `vercel` from the repository root to create the project.
3. Configure the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable in Vercel’s dashboard.
4. Push to the main branch or run `vercel --prod` for a production deployment.

## Troubleshooting

If you're experiencing issues with git operations (like creating branches or checking out branches), please see our [TROUBLESHOOTING.md](TROUBLESHOOTING.md) guide.
