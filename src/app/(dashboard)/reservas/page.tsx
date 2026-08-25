"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { formatBRL } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function ReservasPage() {
  const [expenses, setExpenses] = useState(4700);
  const [rate, setRate] = useState(60);
  const [months, setMonths] = useState(6);
  const average = 7433;
  const proLabore = average * rate / 100;
  const target = expenses * months;
  const reserve = 22000;
  const progress = Math.min(reserve / target * 100, 100);

  return (
    <>
      <Header title="Reservas e Pró-labore" subtitle="Motor de segurança para renda variável" />
      <div className="grid gap-5 p-5 md:grid-cols-2 md:p-8">
        <Card>
          <p className="muted">Pró-labore seguro</p>
          <p className="mt-2 text-4xl font-bold">{formatBRL(proLabore)}</p>
          <p className="mt-2 text-sm text-slate-500">Média móvel: {formatBRL(average)}</p>
          <div className="mt-6">
            <label className="text-sm text-slate-400">Percentual seguro: {rate}%</label>
            <input className="mt-3 w-full" type="range" min="30" max="80" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          </div>
        </Card>

        <Card>
          <p className="muted">Meta de reserva</p>
          <p className="mt-2 text-4xl font-bold">{formatBRL(target)}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="text-sm text-slate-400">Despesas
              <input className="input mt-2" type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} />
            </label>
            <label className="text-sm text-slate-400">Meses
              <input className="input mt-2" type="number" value={months} min={1} max={24} onChange={(e) => setMonths(Number(e.target.value))} />
            </label>
          </div>
          <div className="mt-5 h-2 rounded-full bg-white/5">
            <div className="h-full rounded-full bg-blue-500" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-slate-500">{formatBRL(reserve)} acumulados de {formatBRL(target)}</p>
        </Card>

        <Card className="md:col-span-2">
          <h2 className="font-semibold">Simulador de meses fracos</h2>
          <p className="muted mt-1">Veja quanto sua reserva suporta antes de precisar reduzir custos.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[3, 6, 9, 12].map((m) => (
              <Button key={m} variant="secondary" onClick={() => setMonths(m)}>{m} meses</Button>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
