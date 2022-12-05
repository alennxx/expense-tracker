export interface Expense {
    id: number;
    name: string;
    amount: number;
    category: string;
}

export type ExpenseProperties = Omit<Expense, 'id'>;