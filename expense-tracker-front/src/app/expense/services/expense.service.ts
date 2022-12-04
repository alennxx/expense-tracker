import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subscriber } from "rxjs";
import { Expense, ExpenseProperties } from "../model/expense";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
  private idSeq = 1;

    private readonly mockExpenses: Expense[] = [
        {
          id: this.idSeq++,
          name: 'Catnip',
          amount: 10.0,
          category: 'Cat'
        },
        {
          id: this.idSeq++,
          name: 'Bread and cheese',
          amount: 13.46,
          category: 'Food'
        },
        {
          id: this.idSeq++,
          name: 'Chocolate',
          amount: 4.99,
          category: 'Food'
        },
        {
          id: this.idSeq++,
          name: 'Candles',
          amount: 89.99,
          category: 'Home'
        },
        {
          id: this.idSeq++,
          name: 'Winter gloves',
          amount: 54.99,
          category: 'Clothes'
        },
      ];
    private readonly mockExpenseCategories: string[] = [
      "Cat",
      "Food",
      "Clothes",
      "Home"
    ];
    private readonly expensesSubject = new BehaviorSubject<Expense[]>(this.mockExpenses);
    private readonly expenseCategoriesSubject = new BehaviorSubject<string[]>(this.mockExpenseCategories);

    findAllExpenses(): Observable<Expense[]> {
        return this.expensesSubject.asObservable();
    }

    saveExpense(newExpense: ExpenseProperties): Observable<Expense> {
      return new Observable<Expense>(subscriber => {
        const expense = {...newExpense, id: this.idSeq++};
        const currentExpenses = this.expensesSubject.getValue();
        const newExpenses = [...currentExpenses, expense];
        this.expensesSubject.next(newExpenses);
        subscriber.next(expense);
        subscriber.complete();
      });
    }

    deleteExpense(expenseId: number): void {
      const newExpenses = this.expensesSubject.getValue().filter(expense => expense.id !== expenseId);
      this.expensesSubject.next(newExpenses);
    }

    findAllCategories(): Observable<string[]> {
      return this.expenseCategoriesSubject.asObservable();
    }
    
}

