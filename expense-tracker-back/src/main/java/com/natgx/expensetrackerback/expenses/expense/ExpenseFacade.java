package com.natgx.expensetrackerback.expenses.expense;

import com.natgx.expensetrackerback.expenses.category.ExpenseCategory;
import com.natgx.expensetrackerback.expenses.expense.dto.ExpenseDto;
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

    public ExpenseDto createExpense(ExpenseDto expenseDto) {
        ExpenseCategory category = ExpenseCategory.builder()
                .id(expenseDto.category().id())
                .name(expenseDto.category().name())
                .build();
        Expense expense = Expense.builder()
                .name(expenseDto.name())
                .amount(expenseDto.amount())
                .category(category)
                .build();
        return expenseRepository.save(expense).dto();
    }

    public void deleteById(Long id) {
        if (expenseRepository.existsById(id)) {
            expenseRepository.deleteById(id);
        }
    }

}
