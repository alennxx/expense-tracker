package com.natgx.expensetrackerback.expenses.category;

import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;
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

}
