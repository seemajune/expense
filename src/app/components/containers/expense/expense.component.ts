import { Store } from '@ngrx/store';
import { Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs';

import { RootStoreState,
  ExpensesStoreSelectors, 
  ExpensesStoreActions
} from '../../../root-store';
import { Expense } from '../../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseComponent implements OnInit {
  expense$: Observable<Expense>;

  constructor(private store$: Store<RootStoreState.State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store$.dispatch(new ExpensesStoreActions.RequestExpenseDetailAction({id}));

    this.expense$ = this.store$.select(
      ExpensesStoreSelectors.selectExpenseById(id)
    );
  }

}
