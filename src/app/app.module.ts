import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Routes, RouterModule } from '@angular/router';

import { RootStoreModule } from './root-store';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/containers/expenses/expenses.component';
import { ExpenseListComponent } from './components/presentational/expense-list/expense-list.component';
import { ExpenseDetailsComponent } from './components/presentational/expense-details/expense-details.component';
import { ExpenseComponent } from './components/containers/expense/expense.component';
import { CommentEditorComponent } from './components/editors/comments/comment-editor.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { ReceiptUploaderComponent } from './components/editors/receipts/receipt-uploader.component';
import { ReceiptImagesComponent } from './components/presentational/receipt-images/receipt-images.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/expenses',
        pathMatch: 'full'
    },
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: 'expenses/:id',
        component: ExpenseComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ExpensesComponent,
        ExpenseListComponent,
        ExpenseDetailsComponent,
        ExpenseComponent,
        CommentEditorComponent,
        ReceiptUploaderComponent,
        ReceiptImagesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FilterPipeModule,
        RouterModule.forRoot(routes),
        RootStoreModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreDevtoolsModule.instrument({
            maxAge: 50
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
