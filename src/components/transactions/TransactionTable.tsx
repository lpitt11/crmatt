"use client";

import { Trash2 } from "lucide-react";
import type { Transaction } from "@/types/database";
import { formatBRL, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function TransactionTable({
  transactions,
  onDelete
}: {
  transactions: Transaction[];
  onDelete?: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead className="border-b border-border text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-3 py-3">Data</th>
            <th className="px-3 py-3">Descrição</th>
            <th className="px-3 py-3">Categoria</th>
            <th className="px-3 py-3">Tipo</th>
            <th className="px-3 py-3 text-right">Valor</th>
            <th className="px-3 py-3" />
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-border/60 hover:bg-white/[0.02]">
              <td className="px-3 py-4 text-slate-400">{formatDate(t.date)}</td>
              <td className="px-3 py-4 font-medium">{t.description}</td>
              <td className="px-3 py-4 text-slate-400">{t.category}</td>
              <td className="px-3 py-4">
                <Badge tone={t.type === "income" ? "green" : "red"}>
                  {t.type === "income" ? "Receita" : "Despesa"}
                </Badge>
              </td>
              <td className={`px-3 py-4 text-right font-semibold ${t.type === "income" ? "text-emerald-400" : "text-red-400"}`}>
                {t.type === "income" ? "+" : "-"} {formatBRL(t.amount)}
              </td>
              <td className="px-3 py-4 text-right">
                {onDelete && (
                  <button onClick={() => onDelete(t.id)} className="text-slate-600 hover:text-red-400">
                    <Trash2 size={16} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
