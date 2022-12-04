package com.natgx.expensetrackerback.expense.category;

import com.natgx.expensetrackerback.expense.category.dto.ExpenseCategoryDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExpenseCategoryFacade {

    ExpenseCategoryRepository expenseCategoryRepository;

    public List<ExpenseCategoryDto> findExpenseCategories() {
        return expenseCategoryRepository.findAll().stream().map(ExpenseCategory::dto).collect(Collectors.toList());
    }

    public void createExpenseCategory(ExpenseCategoryDto expenseCategoryDto) {
        ExpenseCategory expenseCategory = ExpenseCategory.builder()
                .name(expenseCategoryDto.name())
                .build();
        expenseCategoryRepository.save(expenseCategory);
    }

}
