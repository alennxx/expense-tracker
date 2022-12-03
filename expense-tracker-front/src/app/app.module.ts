import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpenseDetailsComponent } from './expense/components/expense-details/expense-details.component';
import { ExpensesOverviewComponent } from './expense/components/expenses-overview/expenses-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseDetailsComponent,
    ExpensesOverviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
