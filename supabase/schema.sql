create extension if not exists pgcrypto;

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  description text not null,
  category text not null default 'Outros',
  type text not null check (type in ('income','expense')),
  amount numeric(12,2) not null check (amount >= 0),
  date date not null default current_date,
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  email text,
  phone text,
  company text,
  monthly_value numeric(12,2) not null default 0,
  due_day integer,
  status text not null default 'active' check (status in ('active','inactive')),
  created_at timestamptz not null default now()
);

create table if not exists public.receivables (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  description text not null,
  amount numeric(12,2) not null default 0,
  due_date date not null,
  status text not null default 'pending' check (status in ('pending','paid','overdue')),
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.transactions enable row level security;
alter table public.clients enable row level security;
alter table public.receivables enable row level security;

drop policy if exists "transactions_owner" on public.transactions;
create policy "transactions_owner" on public.transactions
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "clients_owner" on public.clients;
create policy "clients_owner" on public.clients
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "receivables_owner" on public.receivables;
create policy "receivables_owner" on public.receivables
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists transactions_user_date_idx on public.transactions(user_id, date desc);
create index if not exists clients_user_idx on public.clients(user_id);
create index if not exists receivables_user_due_idx on public.receivables(user_id, due_date);
