import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Expense } from '../../../models';
import {
    RootStoreState,
    ExpensesStoreActions,
    ExpensesStoreSelectors
} from '../../../root-store';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html'
})
export class ExpensesComponent implements OnInit {
    expenseItems$: Observable<Expense[]>;
    error$: Observable<string>;
    isLoading$: Observable<boolean>;

    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit() {
        this.expenseItems$ = this.store$.select(
            ExpensesStoreSelectors.selectAllExpenses
        );

        this.error$ = this.store$.select(
            ExpensesStoreSelectors.selectExpenseError
        );

        this.isLoading$ = this.store$.select(
            ExpensesStoreSelectors.selectExpenseIsLoading
        );

        this.store$.dispatch(
            new ExpensesStoreActions.RequestExpensesListAction()
        );
    }
}
