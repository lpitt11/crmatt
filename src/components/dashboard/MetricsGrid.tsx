import { Card } from "@/components/ui/Card";
import { formatBRL } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, PiggyBank, Wallet } from "lucide-react";

export function MetricsGrid({
  income,
  expenses,
  balance,
  reserve
}: {
  income: number;
  expenses: number;
  balance: number;
  reserve: number;
}) {
  const items = [
    ["Receita do mês", income, ArrowUpRight, "text-emerald-400"],
    ["Despesas do mês", expenses, ArrowDownRight, "text-red-400"],
    ["Saldo", balance, Wallet, balance >= 0 ? "text-blue-400" : "text-red-400"],
    ["Reserva atual", reserve, PiggyBank, "text-violet-400"]
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(([label, value, Icon, color]) => (
        <Card key={label}>
          <div className="flex items-center justify-between">
            <span className="muted">{label}</span>
            <Icon size={18} className={color} />
          </div>
          <p className="mt-3 text-2xl font-bold">{formatBRL(value)}</p>
        </Card>
      ))}
    </div>
  );
}
