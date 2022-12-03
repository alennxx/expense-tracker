import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExpenseFormComponentMock,
        ExpensesListComponentMock
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Expense Tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Expense Tracker');
  });

});

@Component({selector: 'app-expense-form', template: ''}) class ExpenseFormComponentMock {}
@Component({selector: 'app-expenses-list', template: ''}) class ExpensesListComponentMock {}