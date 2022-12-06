import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExpensesOverviewComponent } from './expense/components/expenses-overview/expenses-overview.component';
import { ExpenseModule } from './expense/expense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: "/expenses", pathMatch: 'full' },
      {
        path: 'expenses',
        component: ExpensesOverviewComponent
      }
    ]),
    ExpenseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
