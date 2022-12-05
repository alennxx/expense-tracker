import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, of, tap } from "rxjs";
import { Expense } from "../model/expense";
import { ExpenseCategory } from "../model/expense-category";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {

    private readonly expensesSubject = new BehaviorSubject<Expense[]>([]);

    private readonly baseUrl = 'http://localhost:8080';
    private readonly expensesUrl = `${this.baseUrl}/expenses`;
    private readonly expenseCategoriesUrl = `${this.baseUrl}/expense-categories`;

    constructor(private httpClient: HttpClient) { }

    getFindAllExpensesObservable(): Observable<Expense[]> {
      return this.expensesSubject.asObservable();
    }
    
    fetchAllExpenses() {
        this.httpClient.get<Expense[]>(this.expensesUrl)
          .pipe(catchError(this.handleError<Expense[]>('findAllExpenses', [])))
          .subscribe(expenses => this.expensesSubject.next(expenses));
    }

    saveExpense(newExpense: Expense): Observable<Expense> {
      return this.httpClient.post<Expense>(this.expensesUrl, newExpense)
        .pipe(
          tap(expense => {
            const currentExpenses = this.expensesSubject.getValue();
            const newExpenses = [...currentExpenses, expense];
            this.expensesSubject.next(newExpenses);
          }),
          catchError(this.handleError('saveExpense', newExpense))
        );
    }

    deleteExpense(expenseId: number): void {
      this.httpClient.delete(`${this.expensesUrl}/${expenseId}`)
        .subscribe(() => {
          const newExpenses = this.expensesSubject.getValue().filter(expense => expense.id !== expenseId);
          this.expensesSubject.next(newExpenses);
        });
    }

    findAllCategories(): Observable<ExpenseCategory[]> {
      return this.httpClient.get<ExpenseCategory[]>(this.expenseCategoriesUrl)
        .pipe(
          catchError(this.handleError<ExpenseCategory[]>('findAllCategories', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(`${operation}: ${error}`);
        return of(result as T);
      };
    }
    
}

