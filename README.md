# Link Shortener built with Nuxt3-Prisma-TRPC 
## Built with
- [Nuxt3](https://github.com/nuxt/framework)
- [Prisma](https://github.com/prisma/prisma)
- [TRPC-Nuxt](https://github.com/wobsoriano/trpc-nuxt)

## Plugins
- [Tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [Formkit](https://github.com/formkit/formkit)
- [Daisyui](https://github.com/saadeghi/daisyui)
- [Auto Animate](https://github.com/formkit/auto-animate)

## Environment Variables
```bash
DATABASE_URL=postgres://user:pass@host:port/database
NUXT_PUBLIC_BASE_URL=http://localhost:3000/
```

## Prisma Setup
```
# setup database
npx prisma migrate dev --name init

# generate prisma client
npx prisma generate
```

## Setup
```bash
# pnpm
pnpm install
```
## Development Server

Start the development server on http://localhost:3000

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
#yarn
# pnpm
pnpm preview
```