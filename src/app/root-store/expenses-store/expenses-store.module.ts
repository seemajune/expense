import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExpenseStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('expense', featureReducer),
    EffectsModule.forFeature([ExpenseStoreEffects])
  ],
  providers: [ExpenseStoreEffects],
  declarations: []
})
export class ExpensesStoreModule { }
