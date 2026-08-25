"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ConfiguracoesPage() {
  const [name, setName] = useState("Lucas");
  const [email, setEmail] = useState("lucas@email.com");
  const [saved, setSaved] = useState(false);

  return (
    <>
      <Header title="Configurações" subtitle="Perfil e preferências" />
      <div className="max-w-3xl space-y-5 p-5 md:p-8">
        <Card>
          <h2 className="font-semibold">Perfil</h2>
          <p className="muted mt-1">Informações básicas da conta.</p>
          <div className="mt-5 space-y-4">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <Button onClick={() => setSaved(true)}>{saved ? "Salvo ✓" : "Salvar alterações"}</Button>
          </div>
        </Card>
        <Card>
          <h2 className="font-semibold">Preferências financeiras</h2>
          <p className="muted mt-1">Configure as regras usadas pelo motor financeiro.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-400">Meses de reserva
              <Input type="number" defaultValue={6} className="mt-2" />
            </label>
            <label className="text-sm text-slate-400">% pró-labore seguro
              <Input type="number" defaultValue={60} className="mt-2" />
            </label>
          </div>
        </Card>
      </div>
    </>
  );
}
