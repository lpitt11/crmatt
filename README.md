# Finance CRM

SaaS de gestão financeira para freelancers, PJs, autônomos e criadores.

## Stack

Next.js App Router, TypeScript strict, Tailwind CSS, Supabase, Zustand, TanStack Query, Recharts, date-fns e Lucide.

## Instalação

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure as variáveis do Supabase no `.env.local`.

## Banco

Execute `supabase/schema.sql` no SQL Editor do Supabase.

## Rotas

- `/login`
- `/register`
- `/`
- `/transacoes`
- `/reservas`
- `/clientes`
- `/impostos`
- `/configuracoes`

## Observação

A aplicação já possui dados demo para o primeiro carregamento. As operações CRUD usam Supabase quando configurado.
