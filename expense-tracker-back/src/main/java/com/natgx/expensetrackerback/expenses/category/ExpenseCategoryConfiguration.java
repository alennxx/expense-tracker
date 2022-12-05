package com.natgx.expensetrackerback.expenses.category;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpenseCategoryConfiguration {

    @Bean
    public ExpenseCategoryFacade expenseCategoryFacade(ExpenseCategoryRepository expenseCategoryRepository) {
        return new ExpenseCategoryFacade(expenseCategoryRepository);
    }

}
