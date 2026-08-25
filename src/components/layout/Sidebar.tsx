"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, ArrowLeftRight, PiggyBank, Users, Receipt,
  Settings, LogOut, WalletCards
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  ["/", "Visão geral", LayoutDashboard],
  ["/transacoes", "Transações", ArrowLeftRight],
  ["/reservas", "Reservas", PiggyBank],
  ["/clientes", "Clientes", Users],
  ["/impostos", "Impostos", Receipt],
  ["/configuracoes", "Configurações", Settings]
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-border bg-[#090c11] p-5 md:block">
      <div className="mb-9 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
          <WalletCards size={20} />
        </div>
        <div>
          <div className="font-bold">Finance<span className="text-blue-400">CRM</span></div>
          <div className="text-[11px] text-slate-500">Gestão inteligente</div>
        </div>
      </div>

      <nav className="space-y-1.5">
        {links.map(([href, label, Icon]) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
              pathname === href
                ? "bg-blue-600/10 text-blue-300"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
            )}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-4">
        <p className="text-sm font-semibold">Plano PRO</p>
        <p className="mt-1 text-xs text-slate-500">Automação, IA e relatórios avançados.</p>
        <button className="mt-3 text-xs font-semibold text-blue-400">Conhecer PRO →</button>
      </div>

      <button className="mt-6 flex items-center gap-3 px-3 text-sm text-slate-500 hover:text-white">
        <LogOut size={17} /> Sair
      </button>
    </aside>
  );
}
