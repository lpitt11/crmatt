import { Card } from "@/components/ui/Card";

export function RunwayBanner({ months }: { months: number }) {
  const good = months >= 6;

  return (
    <Card className={good ? "border-emerald-500/20" : "border-amber-500/20"}>
      <p className="muted">Runway financeiro</p>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-4xl font-bold">{months.toFixed(1)}</span>
        <span className="pb-1 text-slate-400">meses</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full bg-blue-500" style={{ width: `${Math.min(months / 12 * 100, 100)}%` }} />
      </div>
      <p className="mt-3 text-sm text-slate-400">
        {good ? "Boa margem para meses de menor faturamento." : "Aumente sua reserva para reduzir o risco financeiro."}
      </p>
    </Card>
  );
}
