package com.natgx.expensetrackerback.expenses.expense.dto;

import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;

import java.math.BigDecimal;

public record ExpenseDto(long id, String name, BigDecimal amount, ExpenseCategoryDto category) {
}
