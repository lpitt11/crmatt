"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppModal({ phone }: { phone: string }) {
  const clean = phone.replace(/\D/g, "");
  return (
    <a
      href={clean ? `https://wa.me/55${clean}` : "#"}
      target="_blank"
      rel="noreferrer"
      className="btn-secondary"
    >
      <MessageCircle size={16} /> WhatsApp
    </a>
  );
}
