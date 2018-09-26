import { Action } from '@ngrx/store';
import { HttpEvent } from '@angular/common/http';

import { Expense } from '../../models';

export enum ActionTypes {
    REQUEST_EXPENSES = '[Expenses] Request Expenses Request',
    REQUEST_EXPENSES_FAIL = '[Expenses] Request Expenses Fail',
    REQUEST_EXPENSES_SUCCESS = '[Expenses] Request Expenses Success',

    REQUEST_EXPENSE = '[Expenses] Request Expense Request',
    REQUEST_EXPENSE_FAIL = '[Expenses] Request Expense Fail',
    REQUEST_EXPENSE_SUCCESS = '[Expenses] Request Expense Success',

    UPDATE_EXPENSE = '[Expense] Update Expense',
    UPDATE_EXPENSE_FAIL = '[Expenses] Update Expense Fail',
    UPDATE_EXPENSE_SUCCESS = '[Expenses] Update Expense Success',

    UPLOAD_RECEIPTS = '[Expense] Upload Receipts',
    UPLOAD_START = '[Expense] Receipts Upload Start',
    UPLOAD_FAIL = '[Expense] Receipts Upload Fail',
}

// GET EXPENSES LIST
export class RequestExpensesListAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSES;
}

export class RequestExpensesListFailureAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSES_FAIL;

    constructor(public payload: { error: string }) {}
}

export class RequestExpensesListSuccessAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSES_SUCCESS;

    constructor(public payload: { items: Expense[] }) {}
}

// GET EXPENSE DETAIL
export class RequestExpenseDetailAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSE;

    constructor(public payload: { id: string }) {}
}

export class RequestExpenseDetailSuccessAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSE_SUCCESS;

    constructor(public payload: { items: Expense[] }) {}
}

export class RequestExpenseDetailFailureAction implements Action {
    readonly type = ActionTypes.REQUEST_EXPENSE_FAIL;

    constructor(public payload: { error: string }) {}
}

// POST EXPENSE DETAIL (add comment)
export class UpdateExpenseDetailAction implements Action {
    readonly type = ActionTypes.UPDATE_EXPENSE;

    constructor(public payload: { id: string, expense: Expense }) {}
}

export class UpdateExpenseDetailSuccessAction implements Action {
    readonly type = ActionTypes.UPDATE_EXPENSE_SUCCESS;

    constructor(public payload: { items: Expense[] }) {}
}

export class UpdateExpenseDetailFailureAction implements Action {
    readonly type = ActionTypes.UPDATE_EXPENSE_FAIL;

    constructor(public payload: { error: string }) {}
}

// RECEIPTS UPLOAD
export class UploadReceiptsAction implements Action {
    readonly type = ActionTypes.UPLOAD_RECEIPTS;

    constructor(public payload: { id: string, receipts: any }) {}
}

export class UploadStartAction implements Action {
    readonly type = ActionTypes.UPLOAD_START;

    constructor(public payload: { httpEvent: HttpEvent<any> }) {}
}

export class UploadFailureAction implements Action {
    readonly type = ActionTypes.UPLOAD_FAIL;

    constructor(public payload: { error: string }) {}
}

export type Actions =
    | RequestExpensesListAction
    | RequestExpensesListSuccessAction
    | RequestExpensesListFailureAction
    | RequestExpenseDetailAction
    | RequestExpenseDetailSuccessAction
    | RequestExpenseDetailFailureAction
    | UpdateExpenseDetailAction
    | UpdateExpenseDetailSuccessAction
    | UpdateExpenseDetailFailureAction
    | UploadReceiptsAction
    | UploadStartAction
    | UploadFailureAction;
