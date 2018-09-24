
import { ExpenseAmount } from './expense-amount.model';
import { User } from './user.model';

export interface Expense {
    id: string;
    amount: ExpenseAmount;
    date: string;
    merchant: string;
    receipts: Array<string>;
    comment: string;
    category: string;
    user: User;
    index: number;
}
