"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { formatBRL, formatPercent } from "@/lib/utils";

export default function ImpostosPage() {
  const [revenue, setRevenue] = useState(10000);
  const [tax, setTax] = useState(10);
  const estimated = revenue * tax / 100;

  return (
    <>
      <Header title="Impostos" subtitle="Estimativa e planejamento fiscal" />
      <div className="grid gap-5 p-5 md:grid-cols-3 md:p-8">
        <Card className="md:col-span-2">
          <h2 className="font-semibold">Calculadora fiscal</h2>
          <p className="muted mt-1">Estimativa simples para planejamento. Não substitui orientação contábil.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-400">Faturamento mensal
              <input className="input mt-2" type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} />
            </label>
            <label className="text-sm text-slate-400">Alíquota estimada
              <input className="input mt-2" type="number" min="0" max="100" value={tax} onChange={(e) => setTax(Number(e.target.value))} />
            </label>
          </div>
        </Card>
        <Card>
          <p className="muted">Imposto estimado</p>
          <p className="mt-2 text-3xl font-bold">{formatBRL(estimated)}</p>
          <p className="mt-2 text-xs text-slate-500">{formatPercent(tax / 100)} do faturamento</p>
        </Card>
      </div>
    </>
  );
}
