package com.natgx.expensetrackerback.expense;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpenseConfiguration {

    public ExpenseFacade expenseFacade() {
        ExpenseRepository repository = new InMemoryExpenseRepository();
        return expenseFacade(repository);
    }

    @Bean
    public ExpenseFacade expenseFacade(ExpenseRepository expenseRepository) {
        return new ExpenseFacade(expenseRepository);
    }

}
