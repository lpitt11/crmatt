import { useMemo } from "react";
import type { Transaction, FinancialSummary } from "@/types/database";

export function averageIncome(transactions: Transaction[], months = 6) {
  const values = transactions
    .filter((t) => t.type === "income")
    .slice(-months)
    .map((t) => t.amount);

  if (!values.length) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function safeProLabore(average: number, rate = 0.6) {
  return Math.max(0, average * rate);
}

export function reserveTarget(expenses: number, months = 6) {
  return Math.max(0, expenses * months);
}

export function runway(reserve: number, expenses: number) {
  return expenses > 0 ? reserve / expenses : 0;
}

export function useFinanceCalculations(
  transactions: Transaction[],
  reserve = 0
): FinancialSummary {
  return useMemo(() => {
    const monthlyIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((s, t) => s + t.amount, 0);

    const monthlyExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((s, t) => s + t.amount, 0);

    const average = averageIncome(transactions);
    return {
      monthlyIncome,
      monthlyExpenses,
      balance: monthlyIncome - monthlyExpenses,
      averageIncome: average,
      safeProLabore: safeProLabore(average),
      reserveTarget: reserveTarget(monthlyExpenses),
      runwayMonths: runway(reserve, monthlyExpenses)
    };
  }, [transactions, reserve]);
}
