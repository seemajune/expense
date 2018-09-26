import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';

import {
    Injectable,
    NgModule
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense, ExpensesResponse, ExpenseResponse } from '../models';

@Injectable({
    providedIn: 'root'
})
@NgModule({
    providers: [
        HttpClient
    ]
})

export class DataService {
    private API_BASE_URL = 'http://localhost:3000';
    private expensesUrl = `${this.API_BASE_URL}/expenses`;

    private postJsonHttpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private url;

    constructor(private http: HttpClient) { }

    getExpenses(): Observable<Expense[]> {
        return this.http
            .get<ExpensesResponse>(this.expensesUrl)
            .pipe(
                map((result: any) => {
                    return result.expenses;
                })
            );
    }

    getExpense(id: string): Observable<Expense[]> {
        this.url = `${this.expensesUrl}/${id}`;
        return this.http
            .get<ExpenseResponse>(this.url)
            .pipe(
                map((result: any) => {
                    return [result];
                })
            );
    }

    // used for the addition of comments, but can update any Expense field
    updateExpense(id: string, expense: Expense): Observable<Expense[]> {
        this.url = `${this.expensesUrl}/${id}`;
        return this.http
            .post<Expense>(this.url, expense, this.postJsonHttpOptions)
            .pipe(
                map((result: any) => {
                    return [result];
                })
            );
    }

    uploadReceipts(id: string, payload: any): Observable<any> {
        this.url = `${this.expensesUrl}/${id}/receipts`;

        const formData = new FormData();
        formData.append('receipt', payload, payload.name);

        return this.http
            .post(this.url, formData)
            .pipe(
                map((result: any) => {
                    return [result];
                })
            );
    }
}
