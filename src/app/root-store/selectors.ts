import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ExpensesStoreSelectors } from './expenses-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    ExpensesStoreSelectors.getError,
    (expensesError: string) => expensesError
);

export const isLoading: MemoizedSelector<object, boolean> = createSelector(
    ExpensesStoreSelectors.getIsLoading,
    (expsensesIsLoading: boolean) => expsensesIsLoading
);
