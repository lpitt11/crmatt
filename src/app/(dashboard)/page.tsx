import { Header } from "@/components/layout/Header";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { FinancialChart } from "@/components/dashboard/FinancialChart";
import { RunwayBanner } from "@/components/dashboard/RunwayBanner";
import { Card } from "@/components/ui/Card";
import { formatBRL } from "@/lib/utils";

const income = 9100;
const expenses = 4700;
const reserve = 22000;

export default function DashboardPage() {
  return (
    <>
      <Header title="Visão geral" subtitle="Resumo da sua saúde financeira" />
      <div className="space-y-6 p-5 md:p-8">
        <MetricsGrid income={income} expenses={expenses} balance={income - expenses} reserve={reserve} />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card>
            <div className="mb-4">
              <h2 className="font-semibold">Fluxo financeiro</h2>
              <p className="muted">Receitas x despesas</p>
            </div>
            <FinancialChart />
          </Card>
          <RunwayBanner months={reserve / expenses} />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <p className="muted">Média móvel de receita</p>
            <p className="mt-2 text-2xl font-bold">{formatBRL(7433)}</p>
            <p className="mt-2 text-xs text-slate-500">Base dos últimos 6 meses</p>
          </Card>
          <Card>
            <p className="muted">Pró-labore seguro</p>
            <p className="mt-2 text-2xl font-bold">{formatBRL(4459.8)}</p>
            <p className="mt-2 text-xs text-slate-500">60% da média móvel</p>
          </Card>
          <Card>
            <p className="muted">Meta de reserva</p>
            <p className="mt-2 text-2xl font-bold">{formatBRL(expenses * 6)}</p>
            <p className="mt-2 text-xs text-slate-500">6 meses de despesas</p>
          </Card>
        </div>
      </div>
    </>
  );
}
