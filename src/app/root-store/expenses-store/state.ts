import { Expense } from '../../models';

export interface State {
    items: Expense[] | null;
    isLoading: boolean;
    error: string;
    formData: FormData;
}

export const initialState: State = {
    items: null,
    isLoading: false,
    error: null,
    formData: null
};
