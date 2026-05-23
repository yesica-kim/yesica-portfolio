# Yesica Portfolio

Next.js, TypeScript, Tailwind CSS, and Framer Motion based portfolio site for Yesica.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, usually:

```bash
http://localhost:3000
```

If that port is already in use, Next.js will choose another port such as `3001`.

## Validation

```bash
npm run lint
npm run build
```

## Deployment Workflow

Recommended hosting: Vercel.

- Local: work on your machine with `npm run dev`.
- Development: push work to the `dev` branch and check the Vercel dev deployment URL.
- Production: merge stable work into `main`. Vercel publishes the production URL.

Suggested branch flow:

```bash
main                 # production
dev                  # development/staging
feature/hero-update  # optional individual changes
```

For a simple setup, use:

```bash
main                 # production
dev                  # development preview
```

Vercel environment variables can be separated by environment:

- Development: local development values
- Preview: branch preview values
- Production: live site values

This project currently does not require environment variables.
