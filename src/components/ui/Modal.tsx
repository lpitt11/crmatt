"use client";

import { X } from "lucide-react";

export function Modal({
  open,
  title,
  onClose,
  children
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-5 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-semibold">{title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
