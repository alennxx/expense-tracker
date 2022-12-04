package com.natgx.expensetrackerback.expense.web;

import com.natgx.expensetrackerback.expense.ExpenseFacade;
import com.natgx.expensetrackerback.expense.dto.ExpenseDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/expenses")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExpenseController {
    ExpenseFacade expenseFacade;

    @GetMapping
    List<ExpenseDto> findExpenses() {
        return expenseFacade.findExpenses();
    }

    @PostMapping
    void createExpense(@RequestBody ExpenseDto expense) {
        expenseFacade.createExpense(expense);
    }

    //TODO delete

}
