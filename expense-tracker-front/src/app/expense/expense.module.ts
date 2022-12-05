import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ExpenseDetailsComponent } from "./components/expense-details/expense-details.component";
import { ExpensesOverviewComponent } from "./components/expenses-overview/expenses-overview.component";

@NgModule({
    declarations: [
        ExpenseDetailsComponent,
        ExpensesOverviewComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [ExpensesOverviewComponent]
})
export class ExpenseModule { }