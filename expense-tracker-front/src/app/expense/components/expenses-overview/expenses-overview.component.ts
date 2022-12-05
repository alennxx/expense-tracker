import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '../../model/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expenses-overview',
  templateUrl: './expenses-overview.component.html',
  styleUrls: ['./expenses-overview.component.scss']
})
export class ExpensesOverviewComponent implements OnInit {

  expenses$: Observable<Expense[]> = of([]);
  
  constructor(private expenseService: ExpenseService) { 
    this.expenses$ = expenseService.getFindAllExpensesObservable();
  }

  ngOnInit(): void {
    this.expenseService.fetchAllExpenses();
  }

  deleteExpense(expense: Expense) {
    if (expense.id && confirm(`Are you sure you want to delete "${expense.name}"?`)) {
      this.expenseService.deleteExpense(expense.id);
    }
  }
  
}
