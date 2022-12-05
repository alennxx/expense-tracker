import { ExpenseCategory } from "./expense-category";

export interface Expense {
    id?: number;
    name: string;
    amount: number;
    category: ExpenseCategory;
}