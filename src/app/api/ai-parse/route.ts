import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json() as { text?: string };

  return NextResponse.json({
    success: true,
    parsed: {
      description: body.text ?? "",
      category: "Outros",
      type: "expense",
      amount: 0,
      date: new Date().toISOString().slice(0, 10)
    },
    message: "Parser de IA simulado. Pronto para receber integração com um modelo."
  });
}
