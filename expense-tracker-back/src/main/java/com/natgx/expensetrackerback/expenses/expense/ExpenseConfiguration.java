package com.natgx.expensetrackerback.expenses.expense;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpenseConfiguration {

    @Bean
    public ExpenseFacade expenseFacade(ExpenseRepository expenseRepository) {
        return new ExpenseFacade(expenseRepository);
    }

}
