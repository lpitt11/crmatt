"use client";

import { FormEvent, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { TransactionType } from "@/types/database";

export function AddTransactionModal({
  onAdd
}: {
  onAdd: (data: {
    description: string;
    category: string;
    type: TransactionType;
    amount: number;
    date: string;
  }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Outros");
  const [type, setType] = useState<TransactionType>("expense");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function submit(e: FormEvent) {
    e.preventDefault();
    onAdd({ description, category, type, amount: Number(amount), date });
    setDescription("");
    setAmount("");
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>+ Nova transação</Button>
      <Modal open={open} title="Nova transação" onClose={() => setOpen(false)}>
        <form onSubmit={submit} className="space-y-4">
          <Input placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <div className="grid grid-cols-2 gap-3">
            <select className="input" value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
              <option value="expense">Despesa</option>
              <option value="income">Receita</option>
            </select>
            <Input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input type="number" min="0" step="0.01" placeholder="Valor" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <Button className="w-full">Salvar transação</Button>
        </form>
      </Modal>
    </>
  );
}
