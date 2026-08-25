export type TransactionType = "income" | "expense";
export type ClientStatus = "active" | "inactive";
export type PaymentStatus = "pending" | "paid" | "overdue";

export interface Transaction {
  id: string;
  user_id: string;
  description: string;
  category: string;
  type: TransactionType;
  amount: number;
  date: string;
  created_at: string;
}

export interface Client {
  id: string;
  user_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  monthly_value: number;
  due_day: number | null;
  status: ClientStatus;
  created_at: string;
}

export interface Receivable {
  id: string;
  user_id: string;
  client_id: string;
  description: string;
  amount: number;
  due_date: string;
  status: PaymentStatus;
  paid_at: string | null;
  created_at: string;
}

export interface FinancialSummary {
  monthlyIncome: number;
  monthlyExpenses: number;
  balance: number;
  averageIncome: number;
  safeProLabore: number;
  reserveTarget: number;
  runwayMonths: number;
}
