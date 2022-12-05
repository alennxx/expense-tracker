import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { emptyTextValidator } from 'src/app/validators/emptyTextValidator';
import { Expense } from '../../model/expense';
import { ExpenseCategory } from '../../model/expense-category';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit, OnDestroy {

  expenseForm!: FormGroup;
  expenseCategories$: Observable<ExpenseCategory[]> = of([]);

  private readonly unsubscribe = new Subject<void>();

  constructor(private expenseService: ExpenseService, private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.expenseCategories$ = this.expenseService.findAllCategories();
    this.expenseForm = this.formBuilder.group({
      name: new FormControl('', [emptyTextValidator()]),
      amount: new FormControl('', [Validators.required, Validators.min(0)]),
      category: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save() {
    const amount = this.expenseForm.value.amount;
    const expense: Expense = {
      name: this.expenseForm.value.name ?? '',
      amount: amount ? parseFloat(amount) : 0,
      category: this.expenseForm.value.category ?? ''
    };
    console.log(expense);
    this.expenseService.saveExpense(expense)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.clearForm());
  }

  get name() {
    return this.expenseForm.get('name');
  }

  get amount() {
    return this.expenseForm.get('amount');
  }

  get category() {
    return this.expenseForm.get('category');
  }

  private clearForm(): void {
    this.expenseForm.reset();
  }

}
