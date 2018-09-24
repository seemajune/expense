import { Component,
    OnInit,
    Input,
    Output,
    EventEmitter 
} from '@angular/core';

import { Expense } from '../../../models';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

    @Input() expenses: Expense[];
    @Input() loading: boolean;
    @Input() error: any;

    @Output() idClicked = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onIdClicked(id: string) {
        console.log(`ExpenseListComponent/onIdClicked, id = ${id}`);
        this.idClicked.emit(id);
    }

}
