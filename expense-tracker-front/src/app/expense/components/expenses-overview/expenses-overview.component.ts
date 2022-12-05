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
  
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses$ = this.expenseService.findAllExpenses();
  }

  deleteExpense(expense: Expense) {
    if (confirm(`Are you sure you want to delete "${expense.name}"?`)) {
      this.expenseService.deleteExpense(expense.id);
    }
  }
  
}
