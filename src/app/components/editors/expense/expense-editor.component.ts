import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,
  FormControl,
  FormArray 
} from '@angular/forms';   // todo: implement formarray for receipts
import { Store } from '@ngrx/store';

import { Expense } from '../../../models';
import { UpdateExpenseDetailAction } from '../../../root-store/expenses-store/actions';
import { RootStoreState } from '../../../root-store';

@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.scss']
})
export class ExpenseEditorComponent implements OnInit {
  @Input() expense: Expense;
  expenseForm: FormGroup;

  constructor(private store$: Store<RootStoreState.State>){}

  updateExpense(expense) {
    this.expense.comment = this.expenseForm.value.comment;
    this.store$.dispatch(new UpdateExpenseDetailAction( {id: this.expense.id, expense: this.expense} ))
  }

// todo: add validators, add receipt update
  ngOnInit() {
    this.expenseForm = new FormGroup({
      comment: new FormControl(''),
      receipts: new FormControl(''),
    });
  }

}
