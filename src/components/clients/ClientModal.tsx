"use client";

import { FormEvent, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ClientModal({ onAdd }: { onAdd: (data: { name: string; email: string; phone: string; company: string; monthly_value: number }) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    onAdd({ name, email, phone, company, monthly_value: Number(value) });
    setName(""); setEmail(""); setPhone(""); setCompany(""); setValue(""); setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>+ Novo cliente</Button>
      <Modal open={open} title="Novo cliente" onClose={() => setOpen(false)}>
        <form onSubmit={submit} className="space-y-4">
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input placeholder="Empresa" value={company} onChange={(e) => setCompany(e.target.value)} />
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Telefone / WhatsApp" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Input type="number" min="0" step="0.01" placeholder="Valor mensal" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button className="w-full">Cadastrar cliente</Button>
        </form>
      </Modal>
    </>
  );
}
