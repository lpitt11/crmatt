"use client";

import { Trash2, Mail, Phone } from "lucide-react";
import type { Client } from "@/types/database";
import { formatBRL } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function ClientList({ clients, onDelete }: { clients: Client[]; onDelete?: (id: string) => void }) {
  return (
    <div className="space-y-3">
      {clients.map((client) => (
        <div key={client.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">{client.name}</p>
              <Badge tone={client.status === "active" ? "green" : "yellow"}>
                {client.status === "active" ? "Ativo" : "Inativo"}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-slate-500">{client.company ?? "Cliente particular"}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
              {client.email && <span className="flex items-center gap-1"><Mail size={13} />{client.email}</span>}
              {client.phone && <span className="flex items-center gap-1"><Phone size={13} />{client.phone}</span>}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500">Valor mensal</p>
              <p className="font-semibold">{formatBRL(client.monthly_value)}</p>
            </div>
            {onDelete && (
              <button onClick={() => onDelete(client.id)} className="text-slate-600 hover:text-red-400">
                <Trash2 size={17} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
