import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance CRM",
  description: "Gestão financeira para renda variável"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
