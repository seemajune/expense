import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Routes, RouterModule } from '@angular/router';

import { RootStoreModule } from './root-store';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/containers/expenses/expenses.component';
import { ExpenseListComponent } from './components/presentational/expense-list/expense-list.component';
//import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';

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
    // {
    //     path: 'expenses/:id',
    //     component: ExpenseComponent
    // },
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
        //ExpenseDetailComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        RootStoreModule,
        HttpClientModule,
        StoreDevtoolsModule.instrument({
            maxAge: 50
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
