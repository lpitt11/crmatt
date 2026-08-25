"use client";

import { Bell, Search } from "lucide-react";

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-border px-5 py-4 md:px-8">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-xl border border-border p-2.5 text-slate-400 hover:text-white sm:block">
          <Search size={17} />
        </button>
        <button className="rounded-xl border border-border p-2.5 text-slate-400 hover:text-white">
          <Bell size={17} />
        </button>
        <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-xs font-bold text-blue-300">
          LP
        </div>
      </div>
    </header>
  );
}
