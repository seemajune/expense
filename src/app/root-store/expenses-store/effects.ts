import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/expenses.service';
import * as featureActions from './actions';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class ExpenseStoreEffects {
    constructor(private dataService: DataService, private actions$: Actions) { }

    // EXPENSES LIST
    @Effect()
    loadExpensesListEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.RequestExpensesListAction>(
            featureActions.ActionTypes.REQUEST_EXPENSES
        ),
        startWith(new featureActions.RequestExpensesListAction()),
        switchMap((action: Action) =>
            this.dataService
                .getExpenses()
                .pipe(
                    map(
                        items =>
                            new featureActions.RequestExpensesListSuccessAction({ items })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.RequestExpensesListFailureAction({ error })))
                )
        )
    );

    // EXPENSE DETAIL
    @Effect()
    loadExpenseDetailEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.RequestExpenseDetailAction>(
            featureActions.ActionTypes.REQUEST_EXPENSE
        ),
        switchMap((action: featureActions.RequestExpenseDetailAction) => {
            const id = action.payload.id;

            return this.dataService
                .getExpense(id)
                .pipe(
                    map(
                        items =>
                            new featureActions.RequestExpenseDetailSuccessAction({ items })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.RequestExpenseDetailFailureAction({ error })))
                );
        })
    );

    // UPDATE EXPENSE
    @Effect()
    updateExpenseDetailEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.UpdateExpenseDetailAction>(
            featureActions.ActionTypes.UPDATE_EXPENSE
        ),
        switchMap((action: featureActions.UpdateExpenseDetailAction) => {
            const id = action.payload.id;
            const expense = action.payload.expense;

            return this.dataService
                .updateExpense(id, expense)
                .pipe(
                    map(
                        items =>
                            new featureActions.UpdateExpenseDetailSuccessAction({ items })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.UpdateExpenseDetailFailureAction({ error })))
                );
        })
    );

    // UPLOAD RECEIPTS
    @Effect()
    uploadEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.UploadReceiptsAction>(
            featureActions.ActionTypes.UPLOAD_RECEIPTS
        ),
        switchMap((action: featureActions.UploadReceiptsAction) => {
            const id = action.payload.id;
            const formData = action.payload.receipts;

            return this.dataService
                .uploadReceipts(id, formData)
                .pipe(
                    map((httpEvent: HttpEvent<any>) => {
                        return new featureActions.UploadStartAction({ httpEvent });
                    }),
                    catchError(error =>
                        observableOf(new featureActions.UploadFailureAction({ error }))
                    )
                );
        })
    );
}
