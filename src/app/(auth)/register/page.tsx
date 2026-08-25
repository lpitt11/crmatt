"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    const { error } = await createClient().auth.signUp({ email, password });
    setMessage(error ? error.message : "Conta criada. Confira seu e-mail.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <form onSubmit={submit} className="card w-full max-w-md space-y-5">
        <div>
          <div className="text-sm font-semibold text-blue-400">FinanceCRM</div>
          <h1 className="mt-2 text-2xl font-bold">Criar conta</h1>
          <p className="muted mt-1">Comece a controlar sua renda variável.</p>
        </div>
        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Senha (mínimo 6 caracteres)" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
        <button className="btn-primary w-full">Criar conta</button>
        {message && <p className="text-sm text-slate-400">{message}</p>}
        <p className="text-center text-sm text-slate-500">Já possui conta? <Link className="text-blue-400" href="/login">Entrar</Link></p>
      </form>
    </main>
  );
}
