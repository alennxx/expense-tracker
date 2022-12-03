import { Component } from '@angular/core';
import { Expense } from '../../model/expense';

@Component({
  selector: 'app-expenses-overview',
  templateUrl: './expenses-overview.component.html',
  styleUrls: ['./expenses-overview.component.scss']
})
export class ExpensesOverviewComponent {

  expenses: Expense[] = [
    {
      id: 1,
      name: 'Catnip',
      amount: 10.0,
      category: 'cat'
    },
    {
      id: 2,
      name: 'Bread and cheese',
      amount: 13.46,
      category: 'food'
    },
    {
      id: 3,
      name: 'Chocolate',
      amount: 4.99,
      category: 'food'
    },
    {
      id: 4,
      name: 'Candles',
      amount: 89.99,
      category: 'home'
    },
    {
      id: 5,
      name: 'Winter gloves',
      amount: 54.99,
      category: 'clothes'
    },
  ];

}
