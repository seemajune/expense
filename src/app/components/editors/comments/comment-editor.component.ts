import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Expense } from '../../../models';
import { UpdateExpenseDetailAction } from '../../../root-store/expenses-store/actions';
import { RootStoreState } from '../../../root-store';

@Component({
  selector: 'app-comment-editor',
  templateUrl: './comment-editor.component.html',
  styleUrls: ['./comment-editor.component.scss']
})
export class CommentEditorComponent implements OnInit {
  @Input() expense: Expense;
  commentForm: FormGroup;

  constructor(private store$: Store<RootStoreState.State>){}

  updateExpense(expense) {
    this.expense.comment = this.commentForm.value.comment;
    this.store$.dispatch(new UpdateExpenseDetailAction( {id: this.expense.id, expense: this.expense} ))
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }

}
