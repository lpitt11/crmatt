"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    const { error } = await createClient().auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : "Login realizado.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <form onSubmit={submit} className="card w-full max-w-md space-y-5">
        <div>
          <div className="text-sm font-semibold text-blue-400">FinanceCRM</div>
          <h1 className="mt-2 text-2xl font-bold">Bem-vindo de volta</h1>
          <p className="muted mt-1">Entre para acessar seu painel.</p>
        </div>
        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn-primary w-full">Entrar</button>
        {message && <p className="text-sm text-slate-400">{message}</p>}
        <p className="text-center text-sm text-slate-500">Não possui conta? <Link className="text-blue-400" href="/register">Criar conta</Link></p>
      </form>
    </main>
  );
}
