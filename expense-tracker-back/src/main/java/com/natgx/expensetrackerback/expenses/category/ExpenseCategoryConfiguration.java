package com.natgx.expensetrackerback.expense.category;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpenseCategoryConfiguration {

    public ExpenseCategoryFacade expenseCategoryFacade() {
        ExpenseCategoryRepository repository = new InMemoryExpenseCategoryRepository();
        return expenseCategoryFacade(repository);
    }

    @Bean
    public ExpenseCategoryFacade expenseCategoryFacade(ExpenseCategoryRepository expenseCategoryRepository) {
        return new ExpenseCategoryFacade(expenseCategoryRepository);
    }

}
