import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ExpenseListComponent } from './expense-list.component';
import { FilterPipe, FilterPipeModule } from 'ngx-filter-pipe';

describe('ExpenseListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpenseListComponent
      ],
      providers: [
        FilterPipe
      ],
      imports: [FilterPipeModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(ExpenseListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(ExpenseListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('expense list');
  }));
});
