package com.natgx.expensetrackerback.testdatafactory.expenses;

import com.natgx.expensetrackerback.expenses.category.ExpenseCategory;
import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;

import java.util.List;
import java.util.stream.Collectors;

public final class ExpenseCategoryTestDataFactory {

    public static List<ExpenseCategoryDto> newExpenseCategoriesDto() {
        return newExpenseCategories().stream().map(ExpenseCategory::dto).collect(Collectors.toList());
    }

    public static List<ExpenseCategory> newExpenseCategories() {
        return List.of(newExpenseCategory(1L, "Cat"), newExpenseCategory(2L, "Home"));
    }

    public static ExpenseCategory newExpenseCategory(long id, String name) {
        return ExpenseCategory.builder()
                .id(id)
                .name(name)
                .build();
    }

}
