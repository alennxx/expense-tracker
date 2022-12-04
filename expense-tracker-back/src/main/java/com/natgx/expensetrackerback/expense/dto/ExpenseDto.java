package com.natgx.expensetrackerback.expense.dto;

import com.natgx.expensetrackerback.expense.category.dto.ExpenseCategoryDto;

import java.math.BigDecimal;

public record ExpenseDto(String name, BigDecimal amount, ExpenseCategoryDto category) {
}
