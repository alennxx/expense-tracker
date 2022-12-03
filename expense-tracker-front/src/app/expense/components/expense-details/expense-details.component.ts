import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyTextValidator } from 'src/app/validators/emptyTextValidator';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent {

  expenseForm = new FormGroup({
    name: new FormControl('', [emptyTextValidator()]),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required])
  });

  save() {
    const expense = JSON.stringify(this.expenseForm.value)
    console.log(expense);
  }

}
