import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Expense } from '../../models';

import { State } from './state';
import { allResolved } from 'q';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getExpenses = (state: State): Expense[] => state.items;

export const selectExpensesState: MemoizedSelector<object, State> = createFeatureSelector('expense');

// get the list of expenses
export const selectAllExpenses: MemoizedSelector<object, any> =
    createSelector(
        selectExpensesState,
        getExpenses
    );

export const selectExpensesList = () =>
    createSelector(
        selectExpensesState,
        getExpenses
    );

// get an expense detail by id from the list of expenses
export const selectExpenseById = (id: string) =>
    createSelector(
        selectAllExpenses,
        (allExpenses: Expense[]) => {
            if (!allExpenses) {
                return null;
            }
            return allExpenses.find(p => p.id === id);
        }
    );

// get error
export const selectExpenseError: MemoizedSelector<object, any> =
    createSelector(
        selectExpensesState,
        getError
    );

// get loading state
export const selectExpenseIsLoading: MemoizedSelector<object, any> =
    createSelector(
        selectExpensesState,
        getIsLoading
    );
