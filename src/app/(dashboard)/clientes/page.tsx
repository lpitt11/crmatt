"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { ClientList } from "@/components/clients/ClientList";
import { ClientModal } from "@/components/clients/ClientModal";
import type { Client } from "@/types/database";

const initial: Client[] = [
  { id: "1", user_id: "demo", name: "Empresa Alpha", email: "financeiro@alpha.com", phone: "41999990000", company: "Alpha Ltda.", monthly_value: 3500, due_day: 10, status: "active", created_at: "" },
  { id: "2", user_id: "demo", name: "João Martins", email: "joao@email.com", phone: "41988880000", company: null, monthly_value: 1800, due_day: 15, status: "active", created_at: "" },
  { id: "3", user_id: "demo", name: "Studio Norte", email: "contato@studionorte.com", phone: null, company: "Studio Norte", monthly_value: 2400, due_day: 20, status: "active", created_at: "" }
];

export default function ClientesPage() {
  const [clients, setClients] = useState(initial);

  function add(data: { name: string; email: string; phone: string; company: string; monthly_value: number }) {
    setClients((v) => [{
      ...data,
      id: crypto.randomUUID(),
      user_id: "demo",
      due_day: null,
      status: "active",
      created_at: ""
    }, ...v]);
  }

  return (
    <>
      <Header title="Clientes" subtitle="Clientes, contratos e recebíveis" />
      <div className="space-y-5 p-5 md:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold">Carteira de clientes</h2>
            <p className="muted">{clients.length} clientes cadastrados</p>
          </div>
          <ClientModal onAdd={add} />
        </div>
        <Card>
          <ClientList clients={clients} onDelete={(id) => setClients((v) => v.filter((x) => x.id !== id))} />
        </Card>
      </div>
    </>
  );
}
