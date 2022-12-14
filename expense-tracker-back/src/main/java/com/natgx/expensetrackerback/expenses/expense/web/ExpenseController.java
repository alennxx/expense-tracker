package com.natgx.expensetrackerback.expenses.expense.web;

import com.natgx.expensetrackerback.expenses.expense.ExpenseFacade;
import com.natgx.expensetrackerback.expenses.expense.dto.ExpenseDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/expenses")
@CrossOrigin(origins = "http://localhost:4200")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ExpenseController {
    ExpenseFacade expenseFacade;

    @GetMapping
    List<ExpenseDto> findExpenses() {
        return expenseFacade.findExpenses();
    }

    @PostMapping
    ExpenseDto createExpense(@RequestBody ExpenseDto expense) {
        return expenseFacade.createExpense(expense);
    }

    @DeleteMapping("/{id}")
    void deleteExpense(@PathVariable Long id) {
        expenseFacade.deleteById(id);
    }

}
