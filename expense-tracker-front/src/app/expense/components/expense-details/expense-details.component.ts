import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { emptyTextValidator } from 'src/app/validators/emptyTextValidator';
import { Expense, ExpenseProperties } from '../../model/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnDestroy {

  expenseForm = new FormGroup({
    name: new FormControl('', [emptyTextValidator()]),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required])
  });

  private readonly unsubscribe = new Subject<void>();

  constructor(private expenseService: ExpenseService) { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save() {
    const amount = this.expenseForm.value.amount;
    const expense: ExpenseProperties = {
      name: this.expenseForm.value.name ?? '',
      amount: amount ? parseFloat(amount) : 0,
      category: this.expenseForm.value.category ?? ''
    };
    console.log(expense);
    this.expenseService.saveExpense(expense)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.clearForm());
  }

  private clearForm(): void {
    this.expenseForm.reset();
  }

}
