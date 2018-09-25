import { Component,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';

import { Expense } from '../../../models';

@Component({
    selector: 'app-expense-details',
    templateUrl: './expense-details.component.html',
    styleUrls: ['./expense-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseDetailsComponent {

    @Input() expense: Expense;

    constructor() { }

}
