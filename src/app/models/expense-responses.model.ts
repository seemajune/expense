import { Expense } from './expense.model';

export interface ExpensesResponse {
    type: string;
    value: {
        expenses: Expense[],
        total: number
    };
}

export interface ExpenseResponse {
    type: string;
    value: Expense;
}
