package com.natgx.expensetrackerback.expenses.category.web;

import com.natgx.expensetrackerback.expenses.category.ExpenseCategoryFacade;
import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/expense-categories")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExpenseCategoryController {

    ExpenseCategoryFacade expenseCategoryFacade;

    @GetMapping
    public List<ExpenseCategoryDto> findCategories() {
        return expenseCategoryFacade.findExpenseCategories();
    }

}
