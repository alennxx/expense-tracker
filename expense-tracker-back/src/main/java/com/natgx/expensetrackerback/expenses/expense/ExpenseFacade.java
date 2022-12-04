package com.natgx.expensetrackerback.expense;

import com.natgx.expensetrackerback.expense.category.ExpenseCategory;
import com.natgx.expensetrackerback.expense.dto.ExpenseDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExpenseFacade {

    ExpenseRepository expenseRepository;

    public List<ExpenseDto> findExpenses() {
        return expenseRepository.findAll().stream().map(Expense::dto).collect(Collectors.toList());
    }

    public void createExpense(ExpenseDto expenseDto) {
        ExpenseCategory category = ExpenseCategory.builder().name(expenseDto.category().name()).build();
        Expense expense = Expense.builder()
                .name(expenseDto.name())
                .amount(expenseDto.amount())
                .category(category)
                .build();
        expenseRepository.save(expense);
    }

}
