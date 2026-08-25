"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { AddTransactionModal } from "@/components/transactions/AddTransactionModal";
import { TransactionTable } from "@/components/transactions/TransactionTable";
import type { Transaction } from "@/types/database";

const initial: Transaction[] = [
  { id: "1", user_id: "demo", description: "Projeto Website", category: "Clientes", type: "income", amount: 4500, date: "2026-08-05", created_at: "" },
  { id: "2", user_id: "demo", description: "Adobe / ferramentas", category: "Software", type: "expense", amount: 280, date: "2026-08-08", created_at: "" },
  { id: "3", user_id: "demo", description: "Consultoria", category: "Clientes", type: "income", amount: 2200, date: "2026-08-12", created_at: "" },
  { id: "4", user_id: "demo", description: "Internet", category: "Operacional", type: "expense", amount: 150, date: "2026-08-15", created_at: "" }
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(initial);

  function add(data: Omit<Transaction, "id" | "user_id" | "created_at">) {
    setTransactions((current) => [{ ...data, id: crypto.randomUUID(), user_id: "demo", created_at: "" }, ...current]);
  }

  return (
    <>
      <Header title="Transações" subtitle="Controle completo do fluxo de caixa" />
      <div className="space-y-5 p-5 md:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold">Lançamentos</h2>
            <p className="muted">Registre receitas e despesas.</p>
          </div>
          <AddTransactionModal onAdd={add} />
        </div>
        <Card className="overflow-hidden p-2 md:p-4">
          <TransactionTable transactions={transactions} onDelete={(id) => setTransactions((v) => v.filter((x) => x.id !== id))} />
        </Card>
      </div>
    </>
  );
}
