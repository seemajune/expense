import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/containers/expenses/expenses.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExpensesComponent
      ],
      imports: [RouterTestingModule.withRoutes([
          { path: 'expenses', component: ExpensesComponent }
        ]),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'expense-manager'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Expense Manager');
  }));
});
