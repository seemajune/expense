import { Component, Input } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

import { Expense } from '../../../models';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {

    @Input() expenses: Expense[];
    @Input() loading: boolean;
    @Input() error: any;

    expenseFilter = {
        merchant: '',
        category: '',
    }

    userFilter = {
        user: {
            last: '',
            first: ''
        }
    }

    constructor(private filterPipe: FilterPipe) {
    }

}
